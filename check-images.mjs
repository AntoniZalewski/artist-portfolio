// check-images.mjs
import fs from 'fs';
import path from 'path';

// --- Konfiguracja ---
const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
const publicFolderPath = path.join(process.cwd(), 'public');
// --- Koniec Konfiguracji ---

console.log('\n--- Rozpoczynam sprawdzanie ścieżek do obrazów ---');
console.log(`🔍 Przeszukuję plik: ${dataFilePath}`);

try {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const imageUrlRegex = /imageUrl:\s*"(.*?)"/g;
    const matches = fileContent.matchAll(imageUrlRegex);
    const imagePaths = [...matches].map(match => match[1]);

    if (imagePaths.length === 0) {
        console.error('❌ Nie znaleziono żadnych ścieżek obrazów w pliku data.ts.');
        process.exit(1);
    }
    
    console.log(`🔎 Znaleziono ${imagePaths.length} obrazów do weryfikacji.\n`);
    
    let notFoundCount = 0;

    for (const relativePath of imagePaths) {
        const fullPath = path.join(publicFolderPath, relativePath);
        
        if (fs.existsSync(fullPath)) {
            process.stdout.write(`✅ [OK] ${relativePath}\n`);
        } else {
            process.stdout.write(`❌ [BŁĄD] Plik nie istnieje: ${relativePath}\n`);
            notFoundCount++;
        }
    }

    console.log('\n--- Zakończono sprawdzanie ---');
    if (notFoundCount > 0) {
        console.error(`\n🚨 Znaleziono ${notFoundCount} brakujących plików! Popraw powyższe ścieżki w pliku src/lib/data.ts, upewniając się, że wielkość liter i rozszerzenie zgadzają się z plikami na dysku.`);
    } else {
        console.log('\n🎉 Wygląda na to, że wszystkie ścieżki obrazów są poprawne!');
    }

} catch (error) {
    console.error(`\n💥 Wystąpił krytyczny błąd podczas odczytu pliku data.ts: ${error.message}`);
    process.exit(1);
}
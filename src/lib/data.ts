// src/lib/data.ts

export interface Painting {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  width: number;
  height: number;
}

export interface WorkspacePhoto {
  id: number;
  imageUrl: string;
  width: number;
  height: number;
}

export const paintings: Painting[] = [
    { id: 13, title: "UBU", imageUrl: "/paintings/UBU.jpg", description: "akryl na płótnie / 89x40cm / 2024", width: 400, height: 890 },
    { id: 33, title: "Carpe Diem", imageUrl: "/paintings/CARPE DIEM.jpg", description: "akryl na płótnie / 140x100cm / 2024", width: 1000, height: 1400 },
    { id: 21, title: "Ikigai", imageUrl: "/paintings/IKIGAI.jpg", description: "akryl na płótnie / 80,5x80,5cm / 2024", width: 805, height: 805 },
    { id: 22, title: "Idee fixe", imageUrl: "/paintings/IDEE FIXE.jpg", description: "akryl na płótnie / 81x81cm / 2024", width: 810, height: 810 },
    { id: 11, title: "Melodia", imageUrl: "/paintings/Melodia_1.jpg", description: "akryl na płótnie / 50x50cm / 2024", width: 500, height: 500 },
    { id: 12, title: "Melodia dwa", imageUrl: "/paintings/Melodia_2.jpg", description: "akryl na płótnie / 50x50cm / 2024", width: 500, height: 500 },
    { id: 25, title: "Guru", imageUrl: "/paintings/GURU.jpg", description: "akryl na płótnie / 60x80cm / 2024", width: 600, height: 800 },
    { id: 29, title: "Dolce Vita", imageUrl: "/paintings/DOLCE VITA.jpg", description: "akryl na płótnie / 100x120cm / 2024", width: 1000, height: 1200 },
    { id: 1, title: "Dominus", imageUrl: "/paintings/DOMINUS.jpg", description: "akryl na płótnie (tryptyk) / 200x170cm / 2023", width: 1700, height: 2000 },
    { id: 9, title: "Marzyciel", imageUrl: "/paintings/MARZYCIEL.jpg", description: "akryl na płótnie / 100x120cm / 2023", width: 1000, height: 1200 },
    { id: 28, title: "El Dorado", imageUrl: "/paintings/ELDORADO.jpg", description: "akryl na płótnie / 100x73cm / 2023", width: 730, height: 1000 },
    { id: 31, title: "City Break", imageUrl: "/paintings/CITY_BREAK.jpg", description: "akryl na płótnie / 100x81cm / 2023", width: 810, height: 1000 },
    { id: 2, title: "Macbeth", imageUrl: "/paintings/MACBETH.jpg", description: "akryl na płótnie / 100x140cm / 2022", width: 1000, height: 1400 },
    { id: 4, title: "Rene", imageUrl: "/paintings/RENE.jpg", description: "akryl na płótnie / 120x100cm / 2022", width: 1000, height: 1200 },
    { id: 8, title: "Kamuflaż", imageUrl: "/paintings/KAMUFLAZ.jpg", description: "akryl na płótnie / 120x100cm / 2022", width: 1000, height: 1200 },
    { id: 10, title: "Momentum", imageUrl: "/paintings/Momentum.jpg", description: "akryl na płótnie / 140x81cm / 2022", width: 810, height: 1400 },
    { id: 14, title: "Salvador", imageUrl: "/paintings/SALVADOR.jpg", description: "akryl na płótnie / 120x100cm / 2022", width: 1000, height: 1200 },
    { id: 18, title: "Love Parade", imageUrl: "/paintings/LOVE_PARADE.jpg", description: "akryl na płótnie / 100x80cm / 2022", width: 800, height: 1000 },
    { id: 20, title: "Klepsydra", imageUrl: "/paintings/KLEPSYDRA.jpg", description: "akryl na płótnie / 100x140cm / 2022", width: 1000, height: 1400 },
    { id: 30, title: "Credo", imageUrl: "/paintings/CREDO.jpg", description: "akryl na płótnie / 120x80cm / 2022", width: 800, height: 1200 },
    { id: 3, title: "Feromony", imageUrl: "/paintings/Feromony.jpg", description: "akryl na płótnie / 160x100cm / 2021", width: 1000, height: 1600 },
    { id: 5, title: "Freud", imageUrl: "/paintings/FREUD.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
    { id: 6, title: "Genesis", imageUrl: "/paintings/GENESIS.jpg", description: "akryl na płótnie / 100x120 / 2021", width: 1200, height: 1000 },
    { id: 7, title: "Hendrix", imageUrl: "/paintings/HENDRIX.jpg", description: "akryl na płótnie / 120x100cm / 2021", width: 1000, height: 1200 },
    { id: 15, title: "Prometeusz", imageUrl: "/paintings/PROMETEUSZ.jpg", description: "akryl na płótnie / 160x100cm / 2021", width: 1000, height: 1600 },
    { id: 16, title: "Pegaz", imageUrl: "/paintings/PEGAZ.jpg", description: "akryl na płótnie / 160x100cm / 2021", width: 1000, height: 1600 },
    { id: 17, title: "Pandora", imageUrl: "/paintings/PANDORA.jpg", description: "akryl na płótnie / 100x140cm / 2021", width: 1000, height: 1400 },
    { id: 19, title: "Libido", imageUrl: "/paintings/LIBIDO.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
    { id: 23, title: "Hygge", imageUrl: "/paintings/Hygge.jpg", description: "akryl na płótnie / 100x80cm / 2021", width: 800, height: 1000 },
    { id: 24, title: "Hamlet", imageUrl: "/paintings/HAMLET.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
    { id: 26, title: "Ewolucja", imageUrl: "/paintings/EWOLUCJA.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
    { id: 27, title: "Europa", imageUrl: "/paintings/EUROPA.jpg", description: "akryl na płótnie / 160x100cm / 2021", width: 1000, height: 1600 },
    { id: 32, title: "Chemia", imageUrl: "/paintings/CHEMIA.jpg", description: "akryl na płótnie / 160x100cm / 2021", width: 1000, height: 1600 },
    { id: 34, title: "Bachus", imageUrl: "/paintings/BACHUS.jpg", description: "akryl na płótnie / 140x100cm / 2021", width: 1000, height: 1400 },
    { id: 35, title: "Apetyt", imageUrl: "/paintings/APETYT.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
    { id: 36, title: "Albert", imageUrl: "/paintings/ALBERT.jpg", description: "akryl na płótnie / 100x120cm / 2021", width: 1000, height: 1200 },
];

export const workspacePhotos: WorkspacePhoto[] = [
  { id: 1, imageUrl: "/workplace/IMG_0489.jpg", width: 1000, height: 750 },
  { id: 2, imageUrl: "/workplace/IMG_0874.jpg", width: 1000, height: 750 },
  { id: 3, imageUrl: "/workplace/IMG_1275.jpg", width: 1000, height: 750 },
  { id: 4, imageUrl: "/workplace/MZ014.jpg", width: 1000, height: 750 },
  { id: 5, imageUrl: "/workplace/MZ017.jpg", width: 1000, height: 750 },
];
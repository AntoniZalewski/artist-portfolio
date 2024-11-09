'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

interface Painting {
  id: number
  title: string
  imageUrl: string
  description: string
}

interface WorkspacePhoto {
  id: number
  imageUrl: string
}

const paintings: Painting[] = [
  { id: 1, title: "DOMINUS", imageUrl: "/paintings/DOMINUS.jpg", description: "akryl na płótnie (tryptyk) / 200x170cm / 2023" },
  { id: 2, title: "MACBETH", imageUrl: "/paintings/MACBETH.jpg", description: "akryl na płótnie / 100x140cm / 2022" },
  { id: 3, title: "Feromony", imageUrl: "/paintings/Feromony.jpg", description: "akryl na płótnie / 160x100cm / 2021" },
  { id: 4, title: "RENE", imageUrl: "/paintings/RENE.jpg", description: "akryl na płótnie / 120x100cm / 2022" },
  { id: 5, title: "FREUD", imageUrl: "/paintings/FREUD.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
  { id: 6, title: "GENESIS", imageUrl: "/paintings/GENESIS.jpg", description: "akryl na płótnie / 100x120 / 2021" },
  { id: 7, title: "HENDRIX", imageUrl: "/paintings/HENDRIX.jpg", description: "akryl na płótnie / 120x100cm / 2021" },
  { id: 8, title: "KAMUFLAZ", imageUrl: "/paintings/KAMUFLAZ.jpg", description: "akryl na płótnie / 120x100cm / 2022" },
  { id: 9, title: "MARZYCIEL", imageUrl: "/paintings/MARZYCIEL.jpg", description: "akryl na płótnie / 100x120cm / 2023" },
  { id: 10, title: "MOMENTUM", imageUrl: "/paintings/MOMENTUM.jpg", description: "akryl na płótnie / 140x81cm /  2022" },
  { id: 11, title: "Melodia_1", imageUrl: "/paintings/Melodia_1.jpg", description: "akryl na płótnie / 50x50cm /  2024" },
  { id: 12, title: "Melodia_2", imageUrl: "/paintings/Melodia_2.jpg", description: "akryl na płótnie / 50x50cm /  2024" },
  { id: 13, title: "UBU", imageUrl: "/paintings/UBU.jpg", description: "akryl na płótnie / 89x40cm /  2024" },
  { id: 14, title: "SALVADOR", imageUrl: "/paintings/SALVADOR.jpg", description: "akryl na płótnie / 120x100cm / 2022" },
  { id: 15, title: "PROMETEUSZ", imageUrl: "/paintings/PROMETEUSZ.jpg", description: "akryl na płótnie / 160x100cm / 2021" },
  { id: 16, title: "PEGAZ", imageUrl: "/paintings/PEGAZ.jpg", description: "akryl na płótnie / 160x100cm / 2021" },
  { id: 17, title: "PANDORA", imageUrl: "/paintings/PANDORA.jpg", description: "akryl na płótnie / 100x140cm / 2021" },
  { id: 18, title: "LOVE_PARADE", imageUrl: "/paintings/LOVE_PARADE.jpg", description: "akryl na płótnie / 100x80cm / 2022" },
  { id: 19, title: "LIBIDO", imageUrl: "/paintings/LIBIDO.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
  { id: 20, title: "KLEPSYDRA", imageUrl: "/paintings/KLEPSYDRA.jpg", description: "akryl na płótnie / 100x140cm / 2022" },
  { id: 21, title: "IKIGAI", imageUrl: "/paintings/IKIGAI.jpg", description: "akryl na płótnie / 80,5x80,5cm / 2024" },
  { id: 22, title: "IDEE FIXE", imageUrl: "/paintings/IDEE FIXE.jpg", description: "akryl na płótnie / 81x81cm / 2024" },
  { id: 23, title: "Hygge", imageUrl: "/paintings/Hygge.jpg", description: "akryl na płótnie / 100x80cm / 2021" },
  { id: 24, title: "HAMLET", imageUrl: "/paintings/HAMLET.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
  { id: 25, title: "GURU", imageUrl: "/paintings/GURU.jpg", description: "akryl na płótnie / 60x80cm / 2024" },
  { id: 26, title: "EWOLUCJA", imageUrl: "/paintings/EWOLUCJA.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
  { id: 27, title: "EUROPA", imageUrl: "/paintings/EUROPA.jpg", description: "akryl na płótnie / 160x100cm / 2021" },
  { id: 28, title: "ELDORADO", imageUrl: "/paintings/ELDORADO.jpg", description: "akryl na płótnie / 100x73cm / 2023" },
  { id: 29, title: "DOLCE VITA", imageUrl: "/paintings/DOLCE VITA.jpg", description: "akryl na płótnie / 100x120cm / 2024" },
  { id: 30, title: "CREDO", imageUrl: "/paintings/CREDO.jpg", description: "akryl na płótnie / 120x80cm / 2022" },
  { id: 31, title: "CITY_BREAK", imageUrl: "/paintings/CITY_BREAK.jpg", description: "akryl na płótnie / 100x81cm / 2023" },
  { id: 32, title: "CHEMIA", imageUrl: "/paintings/CHEMIA.jpg", description: "akryl na płótnie / 160x100cm / 2021" },
  { id: 33, title: "CARPE DIEM", imageUrl: "/paintings/CARPE DIEM.jpg", description: "akryl na płótnie / 140x100cm / 2024" },
  { id: 34, title: "BACHUS", imageUrl: "/paintings/BACHUS..jpg", description: "akryl na płótnie / 140x100cm / 2021" },
  { id: 35, title: "APETYT", imageUrl: "/paintings/APETYT.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
  { id: 36, title: "ALBERT", imageUrl: "/paintings/ALBERT.jpg", description: "akryl na płótnie / 100x120cm / 2021" },
]

const workspacePhotos: WorkspacePhoto[] = [
  { id: 1, imageUrl: "/workplace/IMG_0489.jpg" },
  { id: 2, imageUrl: "/workplace/IMG_0874.jpg" },
  { id: 3, imageUrl: "/workplace/IMG_1275.jpg" },
  { id: 4, imageUrl: "/workplace/MZ014.jpg" },
  { id: 5, imageUrl: "/workplace/MZ017.jpg" },
]

export default function ArtistPortfolio() {
  const [selectedImage, setSelectedImage] = useState<Painting | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3">
              <Image
                src="/profilowe01.jpg"
                alt="Marcin Zalewski"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Marcin Zalewski</h1>
              <p className="text-lg mb-6">
                Jestem absolwentem Wydziału Rzeźby Akademii Sztuk Pięknych w Warszawie, dyplom otrzymałem w pracowni prof. J. Kucza w 2004 r. Wcześniej ukończyłem Liceum Plastyczne im. A. Kenara w Zakopanem. Zajmuję się malarstwem, rzeźbą, rysunkiem oraz scenografią. Brałem udział w licznych wystawach indywidualnych oraz zbiorowych w Polsce oraz za granicą (m.in. Niemcy, USA, Wielka Brytania, Litwa, Grecja). Jestem autorem wielu statuetek, tablic pamiątkowych oraz medali okolicznościowych, jednak jako artysta realizuję się przede wszystkim w malarstwie.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:608693228" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Phone size={20} />
                  <span>608 693 228</span>
                </a>
                <a href="mailto:marcinzalewskimail@wp.pl" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Mail size={20} />
                  <span>marcinzalewskimail@wp.pl</span>
                </a>
                <a href="https://www.facebook.com/marcinzalewskiart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/marcin_zalewski_art/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Moja Pracownia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workspacePhotos.map((photo) => (
              <div key={photo.id} className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={photo.imageUrl}
                  alt={`Workspace photo ${photo.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <blockquote className="text-xl italic font-semibold text-gray-900 text-center">
            <p className="mb-4">"Malarstwo figuratywne obok abstrakcji geometrycznej, teraźniejszość i przeszłość, współ egzystują równorzędnie w przekazie nowej serii obrazów Marcina Zalewskiego. Są to prace, w których elementy mitologiczne obecne są równie mocno jak wątki tematyczne, nawiązujące do historii sztuki. Jednak artysta nie narzuca żadnych ograniczeń w procesie rozszyfrowywania jego obrazów, wypełnionych wzajemnie nakładającymi się postaciami, płaszczyznami kolorów i figurami geometrycznymi, pozostawiając w ten sposób widzowi przestrzeń dla indywidualnego odbioru różnych kompozycji i odszukiwania w sobie indywidualnych linków, wdzięcznie spajających prezentowane wątki."</p>
            <footer className="text-gray-600">Alberto Dambruoso</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Galeria Obrazów</h2>
          <p className="mb-8 text-center">Kliknij żeby zobaczyć je w powiększeniu</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintings.map((painting) => (
              <div key={painting.id} className="group" onClick={() => setSelectedImage(painting)}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={painting.imageUrl}
                    alt={painting.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{painting.title}</h3>
                <p className="text-sm text-gray-600">{painting.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              Zamknij
            </button>
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              width={700}
              height={900}
              className="rounded-lg mx-auto"
            />
            <h3 className="text-2xl font-semibold mt-4 text-center">{selectedImage.title}</h3>
            <p className="text-sm text-gray-600 text-center">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
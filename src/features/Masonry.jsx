import { fanArtImages } from "@/data/fanArtData"
import Titulo from "@/components/ui/Titulo";

const CLOUD_NAME = "duml5xr5i";

function Masonry() {

    const getOptimizedUrl = (publicId) => {

        const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

        const transformations = "f_auto,q_auto,w_800,c_limit";

        return `${baseUrl}/${transformations}/${publicId}`;
    };

    return (
        <div className="p-4 w-full md:p-8">
            <div className="bg-white/20 backdrop-blur-sm mb-10 p-3 rounded-xl drop-shadow-xl text-center xl:max-w-5xl xl:mx-auto" >
                <Titulo contenido="Chichones de la tontita :3" tituloStyle="text-red-900 font-extrabold" ></Titulo>
            </div >
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-1 space-y-4 mx-auto max-w-5xl min-h-screen">
                {fanArtImages.map((art) => (
                    <div key={art.id} className="bg-gray-400 break-inside-avoid relative group rounded-xl overflow-hidden shadow-xl">
                        <img
                            src={getOptimizedUrl(art.publicId)}
                            alt={art.alt}
                            width="800"
                            height="600"
                            className="w-ful h-auto object-cover transform transition-transform duration-500 group-hover:scale-105 "
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" >
                            <p className="text-white font-bold">{art.alt}</p>
                            <p className="text-gray-300 text-sm">{art.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default Masonry

// absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4

// break-inside-avoid relative group rounded-xl overflow-hidden shadow-xl bg-gray-800

// w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105
import { fanArtImages } from "@/data/fanArtData"

const CLOUD_NAME = "duml5xr5i";

function Masonry() {

    const getOptimizedUrl = (publicId) => {

        const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

        const transformations = "f_auto,q_auto,w_800,c_limit";

        return `${baseUrl}/${transformations}/${publicId}`;
    };

    return (
        <div className="p-4 bg-pink-50 max-h-screen">
            <h2 className="text-2xl  mb-8 text-center">
                Mi coleccion BL
            </h2>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-1 space-y-4 mx-auto max-w-5xl">
                {fanArtImages.map((art)=>(
                    <div key={art.id} >
                        <img src={getOptimizedUrl(art.publicId)} alt={art.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Masonry
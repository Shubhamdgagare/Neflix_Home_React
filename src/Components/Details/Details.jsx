import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const id = useParams();
    console.log(id.videoid);

    return (<>
        <div>Details</div>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${id.videoid}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
    </>

    )
}

export default Details;
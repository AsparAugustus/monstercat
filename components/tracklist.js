export function displayTrack (number, song, artist, song_length) {




    return (

        <>
        
                <>
        <div className="center" style={{ color: "white" }}>
            {number}
        </div>
        <div style={{ color: "white" }}>
            <div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={33}
                viewBox="0 0 24 24"
                style={{
                    fill: "rgba(253, 253, 253, 1)",
                    transform: "",
                    msfilter: ""
                }}
                >
                <path d="M7 6v12l10-6z" />
                </svg>
                <div className="track">
                <div className="song">
                    <div>
                    {song}
                    </div>
                </div>
                <div className="artist">
                    {artist}
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="center song" style={{ color: "white" }}>
            {song_length}
        </div>
        <div style={{ color: "white" }}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(253, 253, 253, 1)", transform: "", msfilter: "" }}
            >
            <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z" />
            </svg>
        </div>
        </>

        
        
        
        </>
        




    )


}
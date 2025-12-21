import { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
    videoId: string;
}

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
    const playerRef = useRef<any>(null);
    const playerDivRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        // Load YouTube API script
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        // Initialize player once API is ready
        window.onYouTubeIframeAPIReady = () => {
            if (playerDivRef.current) {
                playerRef.current = new window.YT.Player(playerDivRef.current, {
                    videoId,
                    playerVars: { autoplay: 0, controls: 1 },
                });
            }
        };

        // Cleanup
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [videoId]);

    const toggleFullScreen = () => {
        if (!playerDivRef.current) return;

        if (!isFullScreen) {
            playerDivRef.current.style.position = "fixed";
            playerDivRef.current.style.top = "0";
            playerDivRef.current.style.left = "0";
            playerDivRef.current.style.width = "100vw";
            playerDivRef.current.style.height = "100vh";
            playerDivRef.current.style.zIndex = "9999";
            setIsFullScreen(true);
        } else {
            playerDivRef.current.style.position = "";
            playerDivRef.current.style.width = "560px";
            playerDivRef.current.style.height = "315px";
            playerDivRef.current.style.zIndex = "";
            setIsFullScreen(false);
        }
    };

    return (
        <div>
            <div ref={playerDivRef} />
            <button
                onClick={toggleFullScreen}
                style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                }}
            >
                {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
        </div>
    );
};

export default YouTubePlayer;
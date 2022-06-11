export default function Navbar() {
    const middleStyle = "cursor-pointer text-2xl font-[cursive]"
    return (
        <div className="border-b-8 
        flex items-center bg-[#131211] border-b-[#131211] 
        justify-between text-[#F7F6F0]">
            <h1 className="text-6xl mb-1 font-mono cursor-pointer"> AiFy </h1>
            <div className="flex gap-3">
                <h1 className={middleStyle}> Playlists </h1>
                <h1 className={middleStyle}> Trending </h1>
            </div>

            <div className="
            border-4 
            border-slate-300 bg-slate-300 
            hover:bg-slate-500 hover:border-slate-500 duration-300
            rounded-full transition
            h-10 w-10 cursor-pointer">
                User
            </div>
        </div>
    );
}
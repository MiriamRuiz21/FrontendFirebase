import Link from "next/link";
import "@/components/menu.css"
export default function Menu(){
    return (
        <div>
            <Link className="link" href="/chat">Chat</Link>
            <Link className="link" href="/universidades">Universidades</Link>
        </div>
    )
}
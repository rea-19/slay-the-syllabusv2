
//export default function Home() {
 // return (
    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
   //   
    //</main>
//  );
//}

"use client";
import {useRouter} from "next/navigation";



export default function Home() {
   const router = useRouter();
  return (
    <div style={{ background: "red", width: "100vw", display: "flex", height: "100vh", flexDirection: "column",
  alignItems: "center", justifyContent: "center" }}>
      <button onClick={() => router.push("/battle")}>Play Game</button>
      <button>Instructions</button>
    </div>
  );
}


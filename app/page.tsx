import Image from "next/image";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <>
    <main className="font-mono text-white">
        
      <div className=" bg-blue-purple h-[100px] flex flex-row justify-between items-center"> {/* navbar */}
        <div>
            
        </div>
        <div className="flex flex-row text-xl font-bold mr-4 h-12">
            <div className="flex m-auto align-middle justify-center w-32">
                <h2 className="font-bold"> Contact </h2>
            </div>
            <div className="flex align-middle justify-center"> {/* TODO: WHY NOT VERTICALLY CENTER?? */}
                <button className="flex items-center justify-center rounded-3xl w-32 bg-purple hover:cursor-pointer ">
                    <h2>Contact</h2>
                </button >
            </div>
        </div>
      </div>
      <div className="bg-blue-purple h-[calc(100vh-300px)]"> {/* hero */}
        wasd
      </div>
      <div className="bg-orange "> {/* about */}
        wasd
      </div>
      <div className="bg-cyan"> {/* experiences */}
        wasd
      </div>
      <div className="bg-off-white"> {/* projects */}
        <Projects/>
      </div>
      <div className="bg-blue-purple"> {/* footer */}
        wasd
      </div>
    </main>
    </>
  );
}

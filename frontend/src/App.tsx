import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "./assets/logo.png"
import Setup from "./components/Setup/Setup";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <div className="bg-[#FEF7F8] h-screen ">
      <div className="flex p-3 fixed top-0 left-0 right-0 z-10 w-full justify-around z-1 bg-white">

        <img src={Image}></img>

        {/** @see https://www.rainbowkit.com/docs/connect-button */}
        <ConnectButton />
      </div>
      <div className="bg-[#FEF7F8] pt-14 pb-20 ">
        {isConnected ? (
          <>
            <Setup />
          </>
        ) :
          (
            <WelcomePage />
          )}


      </div>
    </div>
  );
}


function WelcomePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Deploy your OP Stack Chain</h1>
          <p className="mt-2">Use the following interface to launch your L2 chain on OPStack. <br /> This interface can be used for testing and preparing for the super-chain, or you can modify it to suit your needs. <a className="underline" href="https://stack.optimism.io/" target="_blank">Learn more</a></p>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}


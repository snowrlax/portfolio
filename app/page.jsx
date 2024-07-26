import Button from "@/components/Button";
import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-purplebg overflow-y-scroll no-scrollbar">
      <MainWrapper>
        <section className="h-screen w-screen relative border-b-2 border-slate-950">
          <svg
            className="absolute hidden md:block -top-0 -right-[25%] z-20"
            width={600}
            height={600}
            viewBox="0 0 701 704"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288.98 6.11354L340.923 218.236L364.791 0L369.916 219.053L439.896 10.3689L397.961 226.111L510.782 36.7354L423.75 239.078L574.135 77.8665L446.076 257.348L626.994 131.84L463.894 280.067L666.885 196.129L476.372 306.174L691.945 267.731L482.926 334.446L701 343.297L483.249 363.562L693.629 419.293L477.327 392.161L670.174 492.165L465.436 418.905L631.734 558.507L448.133 442.545L580.106 615.216L426.227 461.973L517.703 659.641L400.742 476.284L447.444 689.704L372.869 484.805L372.613 704L343.911 487.14L296.71 701.859L315.224 483.18L223.284 683.383L288.148 473.109L155.769 649.436L263.949 457.397L97.3204 601.603L243.758 436.782L50.6721 542.123L228.522 412.225L18.0052 473.776L218.95 384.876L0.846989 399.758L215.49 356.012L0 323.532L218.306 326.985L15.5037 248.658L227.265 299.15L46.6333 178.64L241.948 273.809L91.9332 116.752L261.668 252.148L149.285 65.8871L285.504 235.179L216.008 28.4236L312.341 223.697L288.98 6.11354Z"
              fill="#FF7F7F"
            />
          </svg>
          <Navbar />
        </section>
        <section className="w-screen relative">
          <p className="p-5">Hi there!</p>
        </section>
      </MainWrapper>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import Categories from "./components/Categories";
import BestGear from "./components/BestGear";

export default function Home() {
  return (
    <>
      <hr className="z-1 w-full border-0 h-[1px] bg-[var(--white)]/10 mx-auto sm:w-[calc(100%-80px)] lg:w-[calc(100%-330px)]" />
      <article
        role="region"
        aria-labelledby="xx99-mark-2-heading"
        className="bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-center w-full h-screen -mt-[89px] flex flex-col sm:bg-[url('/assets/home/tablet/image-header.jpg')] sm:h-[729px] lg:bg-[url('/assets/home/desktop/image-hero.jpg')]"
      >
        <div className="absolute mt-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[24px] flex flex-col items-center sm:static sm:translate-x-0 sm:translate-y-0 sm:max-w-[379px] sm:px-0 sm:mx-auto sm:mt-[216px] lg:max-w-[398px] lg:ml-[165px] lg:mt-[225px] lg:items-start">
          <span className="text-[14px] leading-[var(--line-height-regular-14)] tracking-[var(--letter-spacing-regular-14)] font-[var(--font-weight-regular)] text-[var(--white)] opacity-50 mb-[16px] sm:mb-[24px]">
            NEW PRODUCT
          </span>
          <h1
            id="xx99-mark-2-heading"
            className="text-[36px] leading-[var(--line-height-bold-36)] tracking-[var(--letter-spacing-bold-36)] font-[var(--font-weight-bold)] text-[var(--white)] mb-[24px] text-center sm:text-[56px] sm:leading-[var(--line-height-bold-56)] sm:tracking-[var(--letter-spacing-bold-56)] lg:text-start"
          >
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--white)]/75 text-center sm:mx-[15px] mb-[29px] sm:mb-[40px] lg:text-start lg:ml-0 lg:mr-[30px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/headphones/xx99-mark-two-headphones"
            aria-label="View details for XX99 Mark II Headphones"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-[160px] h-[48px] flex items-center justify-center"
          >
            SEE PRODUCT
          </Link>
        </div>
      </article>
      <main>
        <div className="mt-[40px] mb-[120px] sm:my-[96px] lg:mt-[120px] lg:mb-[168px]">
          <Categories></Categories>
        </div>
        <section className="mx-[24px] mb-[120px] flex flex-col gap-[24px] sm:mx-[40px] sm:mb-[96px] sm:gap-[32px] lg:mx-[165px] lg:mb-[200px] lg:gap-[48px]">
          <article
            role="region"
            aria-labelledby="zx9-heading"
            className="relative h-[600px] bg-[var(--dark-orange)] rounded-[8px] flex flex-col items-center overflow-hidden sm:h-[720px] xl:h-[450px]"
          >
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              width={558}
              height={558}
              alt="pattern circles background"
              className="absolute z-0 -top-[121px] w-[558px] h-[558px] object-cover sm:-top-[288px] sm:w-[944px] sm:h-[944px] xl:-top-[20px] xl:-left-[115px] lg:w-[775px] lg:h-[775px]"
            ></Image>
            <picture className="absolute z-1 top-[55px] w-auto h-[207px] sm:h-[237px] xl:w-[320px] xl:h-auto xl:top-[76px] xl:left-[117.49px]">
              <source
                srcSet="/assets/home/desktop/image-speaker-zx9.png"
                media="(min-width: 1280px)"
                width={410.23}
                height={493}
              ></source>
              <source
                srcSet="/assets/home/tablet/image-speaker-zx9.png"
                media="(min-width: 640px)"
                width={197.21}
                height={237}
              ></source>
              <Image
                src="/assets/home/mobile/image-speaker-zx9.png"
                width={172.25}
                height={207}
                alt="ZX9 Speaker"
              ></Image>
            </picture>
            <div className="absolute top-[294px] flex flex-col items-center sm:top-[353px] sm:w-[349px] xl:top-[83px] xl:right-[90px] xl:items-start">
              <h1
                id="zx9-heading"
                className="text-[36px] leading-[var(--line-height-bold-36)] tracking-[var(--letter-spacing-bold-36)] font-[var(--font-weight-bold)] text-[var(--white)] text-center min-h-[80px] mx-[24px] mb-[24px] sm:text-[56px] sm:leading-[var(--line-height-bold-56)] sm:tracking-[var(--letter-spacing-bold-56)] sm:min-h-[116px] sm:mx-0 xl:text-start"
              >
                ZX9<br></br>SPEAKER
              </h1>
              <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--white)]/75 mx-[24px] mb-[24px] text-center sm:mx-0 sm:mb-[40px] xl:text-start">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                href="/speakers/zx9-speaker"
                aria-label="View details for ZX9 speakers"
                className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--black)] hover:bg-[var(--dark-gray)] w-[160px] h-[48px] flex items-center justify-center"
              >
                SEE PRODUCT
              </Link>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="zx7-heading"
            className="w-auto min-h-[320px] pl-[24px] rounded-[8px] bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center flex flex-col justify-center gap-[32px] sm:pl-[62px] sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:pl-[10%] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]"
          >
            <h1
              id="zx7-heading"
              className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[var(--letter-spacing-bold-28)] font-[var(--font-weight-bold)] text-[var(--black)] "
            >
              ZX7 SPEAKER
            </h1>
            <Link
              href="/speakers/zx7-speaker"
              aria-label="View details for ZX7 speakers"
              className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] border border-black border-solid hover:text-[var(--white)] hover:bg-[var(--black)] w-[160px] h-[48px] flex items-center justify-center"
            >
              SEE PRODUCT
            </Link>
          </article>
          <article
            role="region"
            aria-labelledby="yx1-heading"
            className="relative w-auto min-h-[320px] rounded-[8px] flex flex-col gap-[24px] sm:flex-row sm:gap-[11px] lg:gap-[30px]"
          >
            <picture>
              <source
                srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
                media="(min-width: 1024px)"
                width={540}
                height={320}
              ></source>
              <source
                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                media="(min-width: 768px)"
                width={339}
                height={320}
              ></source>
              <Image
                src="/assets/home/mobile/image-earphones-yx1.jpg"
                width={327}
                height={200}
                alt="YX1 Earphones"
                className="w-full h-full rounded-[8px] object-cover sm:w-[339px] sm:h-[320px] lg:w-[540px]"
              ></Image>
            </picture>
            <div className="min-h-[200px] bg-[var(--gray)] rounded-[8px] flex items-center sm:min-w-[339px] sm:flex-1">
              <div className="ml-[24px] flex flex-col gap-[32px] sm:ml-[41px] lg:ml-[12.5%]">
                <h1
                  id="yx1-heading"
                  className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[var(--letter-spacing-bold-28)] font-[var(--font-weight-bold)] text-[var(--black)] "
                >
                  YX1 EARPHONES
                </h1>
                <Link
                  href="/earphones/yx1-earphones"
                  aria-label="View details for YX1 earphones"
                  className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] border border-black border-solid hover:text-[var(--white)] hover:bg-[var(--black)] w-[160px] h-[48px] flex items-center justify-center"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </article>
        </section>
        <BestGear></BestGear>
      </main>
    </>
  );
}

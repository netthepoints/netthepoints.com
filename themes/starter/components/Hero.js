/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
/**
 * 英雄大图区块
 */
export const Hero = () => {
  return <>
     {/* <!-- ====== Hero Section Start --> */}
     <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              {/* 主标题 */}
              <h1
                className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
              >
                {siteConfig('STARTER_HERO_TITLE_1', null, CONFIG)}
              </h1>
              {/* 次标题 */}
              <p
                className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
              >
                {siteConfig('STARTER_HERO_TITLE_2', null, CONFIG)}
              </p>
              {/* 按钮组 */}
              <ul
                className="mb-10 flex flex-wrap items-center justify-center gap-5"
              >
                {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG) &&
                <li>
                  <a
                    href={siteConfig('STARTER_HERO_BUTTON_1_URL', null, CONFIG)}
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                     {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG)}
                  </a>
                </li>
                }
                {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG) &&
                <li>
                  <a
                    href={siteConfig('STARTER_HERO_BUTTON_2_URL', null, CONFIG)}
                    target="_blank"
                    className="flex items-center rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark" rel="noreferrer"
                  >
                    {siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG) && <img className='mr-4' src={siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG)}/>}
                    {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG)}
                  </a>
                </li>
                }
              </ul>

            </div>
          </div>

          {/* 产品预览图片 */}
          <ModalVideo
                        thumb={siteConfig('LANDING_HERO_VIDEO_IMAGE', null, CONFIG)}
                        thumbWidth={768}
                        thumbHeight={432}
                        thumbAlt={siteConfig('HERO_HEADER_1', null, CONFIG)}
                        video={siteConfig('HERO_VIDEO_URL', null, CONFIG)}
                        videoWidth={1920}
                        videoHeight={1080} />

                </div>

            </div>
        </section>
  )
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 首页的关于模块
 */
export const About = () => {
  return <>
       {/* <!-- ====== About Section Start --> */}
       <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* 左侧的文字说明板块 */}
            <div className="w-full px-4 lg:w-full">
              <div className="mb-12 max-w-[840px] lg:mb-0">
                <h2
                  className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]"
                >
                  {siteConfig('STARTER_ABOUT_TITLE', null, CONFIG)}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
                    dangerouslySetInnerHTML={
                    { __html: siteConfig('STARTER_ABOUT_TEXT', null, CONFIG) }
                }></p>

                <a
                  href={siteConfig('STARTER_ABOUT_BUTTON_URL', null, CONFIG)}
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                >
                  {siteConfig('STARTER_ABOUT_BUTTON_TEXT', null, CONFIG)}
                </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
    {/* <!-- ====== About Section End --> */}
    </>
}

import { banner } from './Content';

/* баннер*/
export default function Banner() {




    return (
        <div className="banner">
            <a className="banner_link" href={banner.link}>
                <img className="banner_img" src={banner.img} alt="" />
            </a>
        </div>
    );

}

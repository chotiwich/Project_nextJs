import Footer from "../components/footer/footer";
import Shops from "../components/Shops";
import SetHead from "../components/head";
import Head from "next/head";

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "Olympus OM-D E-M10 ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/u/n/untitled-1_0019_e-m10m3s___0_1.jpg",
    product_price: 24990,
  },
  {
    product_id: 2,
    product_name: "Sony a6600",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/sony-a6600-body.jpg",
    product_price: 42990,
  },
  {
    product_id: 3,
    product_name: "Canon EOS M200",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/3/4/34645_1.jpg",
    product_price: 19990,
  },
  {
    product_id: 4,
    product_name: "Fujifilm X-A7",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/1/5/1568250032_img_1248877_4.jpg",
    product_price: 18990,
  },
  {
    product_id: 5,
    product_name: "Nikon D3500 ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/5/1535611817000_1433064.jpg",
    product_price: 17990,
  },
  {
    product_id: 6,
    product_name: "Canon PowerShot G7X  ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/9/29canon_powershot_g7x_mark_iii_1.jpg",
    product_price: 22990,
  },
  {
    product_id: 7,
    product_name: "Canon EOS 5D Mark III ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20210201_064617_a95e94e5480c22bf7282a35efb93c430.jpg",
    product_price: 61990,
  },
  {
    product_id: 8,
    product_name: "Canon EOS 1500D ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/c/2canon_eos_1500d_kit_18-55mm_is_ii_1.jpg",
    product_price: 18990,
  },
  {
    product_id: 9,
    product_name: "Sony a7R Body",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/1/3/1387562831000_1008112_2.jpg",
    product_price: 30990,
  },
  {
    product_id: 10,
    product_name: "Sony Cyber-shot ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/r/artboard-10-100.jpg",
    product_price: 3190,
  },
  {
    product_id: 11,
    product_name: "Panasonic Lumix ",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/g/f/gf10-black_1_1.jpg",
    product_price: 18991,
  },
  {
    product_id: 12,
    product_name: "Fujifilm X-E4",
    product_img:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/2/0/20210219_074142_1611737492_1618882.jpg",
    product_price: 28990,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Shops data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS,
    },
  };
}

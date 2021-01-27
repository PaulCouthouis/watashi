import { FixedObject, FluidObject } from "gatsby-image";
import { ChildImageSharp } from "./interface";

class ImageService {
  getImage<T extends FluidObject | FixedObject>(
    imageList: ChildImageSharp<T>[],
    imageName: string
  ): T | never[] {
    const image = imageList.find((image) => image.relativePath === imageName);
    return image ? image.childImageSharp.img : [];
  }
}

export default new ImageService();

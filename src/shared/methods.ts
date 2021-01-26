import { FixedObject, FluidObject } from "gatsby-image";
import { ChildImageSharp } from "./interface";

export function getImage<T extends FluidObject | FixedObject>(
  imageList: ChildImageSharp<T>[],
  imageName: string
): T | [] {
  const image = imageList.find((image) => image.relativePath === imageName);
  return image ? image.childImageSharp.img : [];
}

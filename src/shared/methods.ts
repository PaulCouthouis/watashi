import { FixedObject } from "gatsby-image";
import { ChildImageSharp } from "./interface";

export function getImageFixed(
  imageList: ChildImageSharp<FixedObject>[],
  imageName: string
): FixedObject | [] {
  const image = imageList.find((image) => image.relativePath === imageName);
  return image ? image.childImageSharp.img : [];
}

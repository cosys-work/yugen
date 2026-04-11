import packagesContent from "@/content/packages.json"
import CardComponentCarousel from './CardComponentCarousel'

const CharDhamCarousel = () => {
    const charDhamSlides = packagesContent.items
        .filter((item) => item.category.toLowerCase() === "char dham")
        .map((item) => ({
            ...item,
            imageUrl: `/assets-webp/${item.image}`
        }))
    return (
        <CardComponentCarousel title={"Char dham Yatra"} slides={charDhamSlides} />
    )
}

export default CharDhamCarousel
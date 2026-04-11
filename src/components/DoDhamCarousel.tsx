import packagesContent from "@/content/packages.json"
import CardComponentCarousel from './CardComponentCarousel'

const DoDhamCarousel = () => {
    const doDhamSlides = packagesContent.items
        .filter((item) => item.category.toLowerCase() === "do dham")
        .map((item) => ({
            ...item,
            imageUrl: `/assets-webp/${item.image}`
        }))
    return (
        <CardComponentCarousel title={"Do dham Yatra"} slides={doDhamSlides} />
    )
}

export default DoDhamCarousel
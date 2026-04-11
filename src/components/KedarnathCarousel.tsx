import packagesContent from "@/content/packages.json"
import CardComponentCarousel from "./CardComponentCarousel"

const KedarnathCarousel = () => {
    const kedarnathSlides = packagesContent.items
        .filter((item) => item.category.toLowerCase() === "kedarnath dham")
        .map((item) => ({
            ...item,
            imageUrl: `/assets-webp/${item.image}`
        }))
    return (
        <CardComponentCarousel title={"kedarnath Yatra"} slides={kedarnathSlides} />
    )
}

export default KedarnathCarousel
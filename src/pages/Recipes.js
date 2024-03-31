import PreviousSearches from "../component/PreviousSearches"
import RecipesCard from "../component/RecipesCard"

export default function Recipes(){
    const recipes =[
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_1.jpg",
            autherImg:"/img/top-chiefs/img_1.jpg"
        },
        {
            title:"Spaghetti and Meatballs",
            image:"/img/gallery/img_4.jpg",
            autherImg:"/img/top-chiefs/img_2.jpg"
        },
        {
            title:"American Cheese Burger",
            image:"/img/gallery/img_5.jpg",
            autherImg:"/img/top-chiefs/img_3.jpg"
        },
        {
            title:"Mutton Biriyani",
            image:"/img/gallery/img_6.jpg",
            autherImg:"/img/top-chiefs/img_5.jpg"
        },
        {
            title:"Japanese Sushi",
            image:"/img/gallery/img_10.jpg",
            autherImg:"/img/top-chiefs/img_6.jpg"
        },
        {
            title:"American Cheese Burger",
            image:"/img/gallery/img_5.jpg",
            autherImg:"/img/top-chiefs/img_3.jpg"
        },
        {
            title:"Mutton Biriyani",
            image:"/img/gallery/img_6.jpg",
            autherImg:"/img/top-chiefs/img_5.jpg"
        },
        {
            title:"Spaghetti and Meatballs",
            image:"/img/gallery/img_4.jpg",
            autherImg:"/img/top-chiefs/img_2.jpg"
        }
    ].sort(() => Math.random() - 0.5)
    return(
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
                {/*<RecipesCard/>*/}
                {recipes.map((recipe, index) =>(
                    <RecipesCard key={index} recipe={recipe}/>
                ))}
                
            </div>
        </div>
    )
}
import { getAllCategories } from "@/utlis/getAllCategories";


const CategoryList = async () => {
    const data = await getAllCategories();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default CategoryList;
"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import NavMenu from '../components/NavMenu/NavMenu';

interface Recipe {
    recipe: {
        calories: number;
        label: string;
        image: string;
    };
}

const Restuarants = () => {
    const [recipes, setRecipes] = React.useState<Recipe[]>([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [getRate, setRate] = React.useState(0);


    const fetchRecipes = async () => {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=667eef1c&app_key=${process.env.NEXT_PUBLIC_RECIPE_API}&q=q=${searchQuery}`)
        const result = await data.json()
   
        setRecipes(result.hits);
    };
    
    React.useEffect(() => {
        const getLiveRate = async () => {
            const rate = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API}&currencies=NGN`);
            const result = await rate.json();
            setRate(result.data.NGN.value)
        }
        getLiveRate()

    }, []);



    return (
        <div>
            <NavMenu />
            <div className="flex pl-8 items-center h-80 w-full bg-purple-950 bg-[url('https://domesticfits.com/wp-content/uploads/2023/06/nigerian-food-explained-640x427.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay">
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>Recipe</h1>

            </div>
            <div className="container max-w-screen-2xl mx-auto w-full">
                <div className="flex pt-11 w-full justify-center">
                    <Input
                        type='text'
                        placeholder='Search menu, recipe etc.'
                        className='h-14 w-1/2'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button className='h-14 px-10 ml-3 bg-purple-950'
                        onClick={fetchRecipes}
                    >Search</Button>
                </div>

                <div className="max-w-5xl items mt-10 flex-auto flex justify-left w-full mx-auto flex-wrap">
                    {recipes && recipes.length > 0 ?(
                        recipes.map((res, idx) => {
                            let amount = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
                            return (
                                <div className="card w-full md:w-1/2 lg:w-1/3 px-2 mb-3" key={idx}>
    
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-8 rounded-t-lg" src={res.recipe.image} alt="product image" />
                                    </a>
                                    <div className="px-3 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{res.recipe.label}</h5>
                                        </a>
    
                                        <div className="flex items-center justify-between mt-5">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">N{amount}</span>
                                            <h2>Calories: {res.recipe.calories.toFixed(2)}</h2>
                                        </div>
                                        <Popover>
                                            <PopoverTrigger className="text-white bg-purple-950 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:bg-purple-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:bg-purple-500 mt-5">Covert to USD</PopoverTrigger>
                                            <PopoverContent>
                                                <span className="text-xl font-bold text-gray-900 dark:text-white">Price in USD: <span className='text-2xl'>${(amount / getRate).toFixed(2)}</span></span>
                                            </PopoverContent>
                                        </Popover>                           </div>
                                </div>
    
                            </div>
                            )
                        })
                    ): (
                        <p className='text-center w-full'>No Recipes found.</p>
                    )}




                </div>
            </div>
        </div>
    )
}

export default Restuarants


const getAllProductsStatic = async ({ req, res }: any) => {
    throw new Error('testing async errors')
    res.status(200).json({msg: 'product testing route'})
}

const getAllProducts = async ({req, res}: any) => {
    res.status(200).json({msg: 'product testing route'})
}

export{
    getAllProductsStatic,
    getAllProducts
}
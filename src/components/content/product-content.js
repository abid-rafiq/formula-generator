
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ArrowForward } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import './content.css';
import * as React from 'react';
import { useGetProductsQuery } from '../../app/store/reducers/product/reducers.ts';
import ProductCardsList from '../product-card/product-card.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlisted } from '../../app/store/reducers/wishlist/reducers.js';

function ProductContent({ children }) {

    const [page, setPage] = React.useState(4);
    const [visibleData, setVisibleData] = React.useState([]);

    const { products, showWishlistedOnly } = useSelector(state => state.wishlist);
    const { data, isLoading } = useGetProductsQuery();
    const dispatch = useDispatch();

    const toggleLikedProducts = () => {
        dispatch(toggleWishlisted(!showWishlistedOnly))
    }

    const loadMoreData = () => {
        const newPage = page+4;
        const dataArr = data.slice(0, newPage);
        setVisibleData(dataArr);
        setPage(newPage)
    }

    React.useEffect(() => {
        if (data) {
            const dataArr = data.slice(0, page);
            setVisibleData(dataArr);
        }
    }, [data])

    return (
        <>
            <div className='ntt__section-header'>
                <div className='container'>
                    <Grid container alignItems={"center"} spacing={2} mb={4}>
                        <Grid item xs={12} md={4}>
                            <h1 className='ntt__section-title'>Content title goes here</h1>
                        </Grid>
                        <Grid ml={"auto"} item>
                            <Grid container spacing={2} alignItems={"center"} className='ntt__section-action'>
                                <Grid item>
                                    <Typography variant='body1' fontWeight={600}><FavoriteBorderIcon sx={{ marginRight: 1, top: 5, position: 'relative' }} />{products?.length} ÜRÜN</Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={toggleLikedProducts} size='small' variant="contained" disableElevation>
                                        { showWishlistedOnly ? 'All' : 'Beğenilenler' }
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='ntt__cards-wrapper'>
                <div className='container'>
                    <ProductCardsList key={"product-list"} data={visibleData} isLoading={isLoading} />
                    <Grid container mt={6} justifyContent={"center"}>
                        <Grid item >
                            <Button onClick={loadMoreData} style={{ textTransform: 'none' }} variant="contained" disableElevation size="large" endIcon={<ArrowForward />}>
                                Daha Fazla
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    );
}

export default ProductContent;

import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addWishListItem, removeWishListItem } from '../../app/store/reducers/wishlist/reducers';

import 'swiper/css';
import 'swiper/css/pagination';
import './product-card.css';


function ProductCardsList({ data, isLoading }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const dispatch = useDispatch();
    const { products, showWishlistedOnly } = useSelector(state => state.wishlist);

    const addRemoveWishlist = (data) => {
        if (products.includes(data.id)) { // Remove wishlist item
            dispatch(removeWishListItem(products.indexOf(data.id)))
        } else { // Add wishlist item
            dispatch(addWishListItem(data.id))
        }
    }

    const isWishlisted = (id) => {
        return products.includes(id)
    }

    const filterProducts = (data) => {
        if (showWishlistedOnly) {
            data = data.filter(x => products.includes(x.id));
        }

        return data;
    }

    const navigateTo = () => {
        window.open('https://www.google.com', '_blank');
    }

    const CustomCard = ({ data }) => (

        <React.Fragment>
            <CardContent>
                <span onClick={(event) => { event.stopPropagation(); addRemoveWishlist(data) }} className={`ntt__wishlist-icon ${isWishlisted(data.id) ? 'ntt__wishlist--active' : ''}`}>
                    {
                        isWishlisted(data.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />
                    }
                </span>
                <img src={data.imageUrl} alt="Product Display" className='ntt__card-image' />
                <Typography variant='h4' sx={{ fontSize: 18, color: '#00254F' }} fontWeight={600} mb={2}>
                    {data.name}
                </Typography>
                <div className='ntt__card-price-bar'>
                    <Typography variant='h5' sx={{ fontSize: 16, color: '#00254F' }} fontWeight={700}>
                        {data.price} TL
                    </Typography>
                </div>
                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 500, color: '#00254F' }} mb={1}>
                    Description
                </Typography>
                <Typography variant="body2" mb={2} fontSize={14} color={"#00254F"}>
                    {data.description}
                </Typography>
                <Typography variant="body2" fontSize={14} color={"#000000"}>
                    {data.shippingMethod}
                </Typography>
            </CardContent>
        </React.Fragment>
    )

    if (matches) {
        return (
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, }}
                className="ntt__cards"
            >
                {!isLoading && filterProducts(data).map((product) => (
                    <SwiperSlide key={`swiper-${product.id}`}>
                        <Card onClick={navigateTo} style={{ position: 'relative', cursor: 'pointer' }} variant="outlined">
                            <CustomCard  data={product} />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    } else {
        return (
            <Grid container spacing={2}>
                {!isLoading && filterProducts(data).map((product) => (
                    <Grid key={`card-${product.id}`} item xs={12} sm={4} md={4} lg={3}>
                        <Card onClick={navigateTo} style={{ position: 'relative', cursor: 'pointer' }} variant="outlined">
                            <CustomCard  data={product} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default ProductCardsList;

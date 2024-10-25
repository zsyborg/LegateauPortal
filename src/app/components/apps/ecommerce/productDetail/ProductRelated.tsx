import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "@/store/hooks";
import { fetchProducts } from "@/store/apps/eCommerce/ECommerceSlice";
import Link from "next/link";
import BlankCard from "../../../shared/BlankCard";
import { ProductType } from "../../../../(DashboardLayout)/types/apps/eCommerce";
import Image from "next/image";

const ProductRelated = () => {
  const dispatch = useDispatch();

  // Get Product
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterRelatedProduct = (products: ProductType[]) => {
    if (products) return products.filter((t) => t.related);

    return products;
  };

  // Get Products
  const Relatedproducts = useSelector((state) =>
    filterRelatedProduct(state.ecommerceReducer.products)
  );

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={2} mt={5}>
        Related Products
      </Typography>
      <Grid container spacing={3}>
        {Relatedproducts.map((product) => (
          <Grid
            item
            xs={12}
            lg={3}
            sm={4}
            display="flex"
            alignItems="stretch"
            key={product.title}
          >
            {/* ------------------------------------------- */}
            {/* Product Card */}
            {/* ------------------------------------------- */}
            <BlankCard sx={{ p: 0 }} className="hoverCard">
              <Typography
                component={Link}
                href={`/apps/ecommerce/detail/${product.id}`}
              >
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={270}
                  ></Skeleton>
                ) : (
                  <Image src={product.photo} alt="img" width={250} height={268} style={{ width: "100%" }} />
                )}
              </Typography>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h5">${product.price}</Typography>
                    <Typography
                      color={"GrayText"}
                      ml={1}
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.salesPrice}
                    </Typography>
                  </Stack>
                  <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  />
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductRelated;

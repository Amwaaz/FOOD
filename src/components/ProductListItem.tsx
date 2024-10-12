import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Colors from '@/src/constants/Colors';
//import products from '@/assets/data/products';
import { Product } from '../types';


// Get screen height using Dimensions API
const { height } = Dimensions.get('window');

const ProductListItem = ({ product }: { product: Product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemBox}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth:'50%'
    },
    itemBox: {
        width: "80%",
        maxWidth: 350,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        height: height * 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        aspectRatio: 1.5,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'contain',

    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 5,
        textAlign: 'center',
    },
    price: {
        color: Colors.light.tint,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
    }
});

export default ProductListItem;


// In JavaScript/TypeScript, when you write { product: Product }, it is interpreted as "destructure the product prop and rename it to Product." This is not what you want.

// type ProductListItemProps={
//   product:Product and then in component {product}:ProductItemListprops

// }

//for the source ka error give it a default uri so that agr given uri null nikl aye it still has a string one :"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png" by making it equal to export const defaultPizzaImage


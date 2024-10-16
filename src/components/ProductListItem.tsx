import { StyleSheet, Text, View, Image, Dimensions, Pressable} from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

{/* the path says that app(root) pe jao wahan se menu main wahan se wo screen load kro jahan product id ho */}
// Get screen height using Dimensions API
const { height } = Dimensions.get('window');

const ProductListItem = ({ product }: { product: Product }) => {
    return (
        <View style={styles.container}>
            <Link href={`/menu/${product.id}`} asChild>
              <Pressable style={styles.itemBox}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>

             </Pressable>
            </Link>
        </View >
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50%'
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
        color:'#00004D'
    },
    price: {
        color:'#00004D',
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

//hm itembox wale ko pressable bna rhe hain so that works in app form too wrna web main it works with view too.

//with `` you can embed variables and expressions directly inside the string. The expression inside ${} is evaluated and the result is inserted into the string.

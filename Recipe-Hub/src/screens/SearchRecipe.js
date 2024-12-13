import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  BellIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";
import Recipes from "../components/recipes";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

function SearchRecipe() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
    // getRecipes();
  }, [input]);

  const handleChangeCategory = (category) => {
    // getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    console.log("input value", input);
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      // console.log('got categories: ',response.data);
      console.log("🚀 ~ getCategories ~ response.data:", response?.data);
      if (response && response?.data) {
        setMeals(response?.data?.meals);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
  // const getRecipes = async (category = "Beef") => {
  //   try {
  //     const response = await axios.get(
  //       `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
  //     );
  //     // console.log('got recipes: ',response.data);
  //     if (response && response.data) {
  //       setMeals(response.data.meals);
  //     }
  //   } catch (err) {
  //     console.log("error: ", err.message);
  //   }
  // };

  console.log("meals", meals);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}

        {/* search bar */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full ml-5 bg-white"
          >
            <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
          </TouchableOpacity>
          <View
            className="flex-row items-center rounded-full bg-black/5 p-[6px]"
            style={{ width: "80%" }}
          >
            <TextInput
              placeholder="Search any recipe"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(1.7) }}
              value={input}
              onChangeText={(text) => setInput(text)} // Correct way to handle text input
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                strokeWidth={3}
                color="gray"
              />
            </View>
          </View>
        </View>
        {/* categories */}
        {/* <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View> */}

        {/* recipes */}
        <View>
          {meals ? (
            <Recipes meals={meals ? meals : []} />
          ) : (
            <View className="flex-1 flex justify-center items-center">
              <Text> No Date Found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchRecipe;

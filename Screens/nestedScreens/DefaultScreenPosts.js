import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import UserInfo from "../../components/UserInfo";
import { postsScreenArr } from "../../data/posts";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../components/GlobalStateProvider";
import { useSelector } from "react-redux";
import { selectState, selectUserId } from "../../redux/auth/selectors";

export default function DefaultScreenPosts() {
  const [posts, setPosts] = useState(postsScreenArr);
  const { isRefetchedPosts } = useContext(GlobalContext);
  // const userId = useSelector(selectUserId);
  
 

  useEffect(() => {
    const getPosts = async () => {
      const storedPosts = await AsyncStorage.getItem("posts");
      if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);
        setPosts([...postsScreenArr, ...parsedPosts]);
      }
    };

    getPosts();
  }, [isRefetchedPosts]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<UserInfo />}
        data={posts}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
});

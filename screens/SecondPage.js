
import {Image,TouchableOpacity, Text,Button, View,ScrollView } from 'react-native';
import React, { useState } from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from 'react-native-safe-area-context'





const SecondPage = ({navigation}) => {

   const units= [ 
      { id : 1,
        units: {
          title: "Unit one",
          description: "Restoration Through Christ (Lesson 1-4)",
          lessons: [
            { id: 1,
              title: "lesson one",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",

                  
                    day1: "Monday",
                    date1: "02/06/2020",
                    topic1: "Use Opportunity Wisely",
                    bible_text1 : "Philem. 1:9-10",
                    lesson_word1: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis1: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point1 : "oday you will learn the secret recipe to a collapsible header ",

                    day2: "Monday",
                    date2: "02/06/2020",
                    topic2: "Use Opportunity Wisely",
                    bible_text2 : "Philem. 1:9-10",
                    lesson_word2: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis2: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point2 : "oday you will learn the secret recipe to a collapsible header ",

                    day3: "Monday",
                    date3: "02/06/2020",
                    topic3: "Use Opportunity Wisely",
                    bible_text3 : "Philem. 1:9-10",
                    lesson_word3: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis3: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point3 : "oday you will learn the secret recipe to a collapsible header ",


                    day4: "Monday",
                    date4: "02/06/2020",
                    topic4: "Use Opportunity Wisely",
                    bible_text4 : "Philem. 1:9-10",
                    lesson_word4: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis4: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point4 : "oday you will learn the secret recipe to a collapsible header ",

                    day5: "Monday",
                    date5: "02/06/2020",
                    topic5: "Use Opportunity Wisely",
                    bible_text5 : "Philem. 1:9-10",
                    lesson_word5: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis5: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point5 : "oday you will learn the secret recipe to a collapsible header ",


                    day6: "Monday",
                    date6: "02/06/2020",
                    topic6: "Use Opportunity Wisely",
                    bible_text6 : "Philem. 1:9-10",
                    lesson_word6: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis6: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point6 : "oday you will learn the secret recipe to a collapsible header ",

                    day7: "Monday",
                    date7: "02/06/2020",
                    topic7: "Use Opportunity Wisely",
                    bible_text7 : "Philem. 1:9-10",
                    lesson_word7: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis7: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point7 : "oday you will learn the secret recipe to a collapsible header ",

                },
            
            },
            { id: 2,
              title: "lesson two",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 5",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",

                    day: "Monday",
                    date: "02/06/2020",
                    topic: "Use Opportunity Wisely",
                    bible_text : "Philem. 1:9-10",
                    lesson_word: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point : "oday you will learn the secret recipe to a collapsible header ",

                    day1: "Monday",
                    date1: "02/06/2020",
                    topic1: "Use Opportunity Wisely",
                    bible_text1 : "Philem. 1:9-10",
                    lesson_word1: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis1: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point1 : "oday you will learn the secret recipe to a collapsible header ",

                    day2: "Monday",
                    date2: "02/06/2020",
                    topic2: "Use Opportunity Wisely",
                    bible_text2 : "Philem. 1:9-10",
                    lesson_word2: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis2: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point2 : "oday you will learn the secret recipe to a collapsible header ",

                    day3: "Monday",
                    date3: "02/06/2020",
                    topic3: "Use Opportunity Wisely",
                    bible_text3 : "Philem. 1:9-10",
                    lesson_word3: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis3: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point3 : "oday you will learn the secret recipe to a collapsible header ",


                    day4: "Monday",
                    date4: "02/06/2020",
                    topic4: "Use Opportunity Wisely",
                    bible_text4 : "Philem. 1:9-10",
                    lesson_word4: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis4: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point4 : "oday you will learn the secret recipe to a collapsible header ",

                    day5: "Monday",
                    date5: "02/06/2020",
                    topic5: "Use Opportunity Wisely",
                    bible_text5 : "Philem. 1:9-10",
                    lesson_word5: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis5: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point5 : "oday you will learn the secret recipe to a collapsible header ",


                    day6: "Monday",
                    date6: "02/06/2020",
                    topic6: "Use Opportunity Wisely",
                    bible_text6 : "Philem. 1:9-10",
                    lesson_word6: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis6: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point6 : "oday you will learn the secret recipe to a collapsible header ",

                    day7: "Monday",
                    date7: "02/06/2020",
                    topic7: "Use Opportunity Wisely",
                    bible_text7 : "Philem. 1:9-10",
                    lesson_word7: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis7: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point7 : "oday you will learn the secret recipe to a collapsible header ",

                },
              
            },
            { id: 3,
              title: "lesson three",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 6",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                   
                    day: "Monday",
                    date: "02/06/2020",
                    topic: "Use Opportunity Wisely",
                    bible_text : "Philem. 1:9-10",
                    lesson_word: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point : "oday you will learn the secret recipe to a collapsible header ",

                    day1: "Monday",
                    date1: "02/06/2020",
                    topic1: "Use Opportunity Wisely",
                    bible_text1 : "Philem. 1:9-10",
                    lesson_word1: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis1: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point1 : "oday you will learn the secret recipe to a collapsible header ",

                    day2: "Monday",
                    date2: "02/06/2020",
                    topic2: "Use Opportunity Wisely",
                    bible_text2 : "Philem. 1:9-10",
                    lesson_word2: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis2: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point2 : "oday you will learn the secret recipe to a collapsible header ",

                    day3: "Monday",
                    date3: "02/06/2020",
                    topic3: "Use Opportunity Wisely",
                    bible_text3 : "Philem. 1:9-10",
                    lesson_word3: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis3: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point3 : "oday you will learn the secret recipe to a collapsible header ",


                    day4: "Monday",
                    date4: "02/06/2020",
                    topic4: "Use Opportunity Wisely",
                    bible_text4 : "Philem. 1:9-10",
                    lesson_word4: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis4: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point4 : "oday you will learn the secret recipe to a collapsible header ",

                    day5: "Monday",
                    date5: "02/06/2020",
                    topic5: "Use Opportunity Wisely",
                    bible_text5 : "Philem. 1:9-10",
                    lesson_word5: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis5: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point5 : "oday you will learn the secret recipe to a collapsible header ",


                    day6: "Monday",
                    date6: "02/06/2020",
                    topic6: "Use Opportunity Wisely",
                    bible_text6 : "Philem. 1:9-10",
                    lesson_word6: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis6: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point6 : "oday you will learn the secret recipe to a collapsible header ",

                    day7: "Monday",
                    date7: "02/06/2020",
                    topic7: "Use Opportunity Wisely",
                    bible_text7 : "Philem. 1:9-10",
                    lesson_word7: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis7: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point7 : "oday you will learn the secret recipe to a collapsible header ",

                  },
              
            },
            { id: 4,
              title: "lesson four",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",

                    day: "Monday",
                    date: "02/06/2020",
                    topic: "Use Opportunity Wisely",
                    bible_text : "Philem. 1:9-10",
                    lesson_word: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point : "oday you will learn the secret recipe to a collapsible header ",

                    day1: "Monday",
                    date1: "02/06/2020",
                    topic1: "Use Opportunity Wisely",
                    bible_text1 : "Philem. 1:9-10",
                    lesson_word1: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis1: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point1 : "oday you will learn the secret recipe to a collapsible header ",

                    day2: "Monday",
                    date2: "02/06/2020",
                    topic2: "Use Opportunity Wisely",
                    bible_text2 : "Philem. 1:9-10",
                    lesson_word2: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis2: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point2 : "oday you will learn the secret recipe to a collapsible header ",

                    day3: "Monday",
                    date3: "02/06/2020",
                    topic3: "Use Opportunity Wisely",
                    bible_text3 : "Philem. 1:9-10",
                    lesson_word3: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis3: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point3 : "oday you will learn the secret recipe to a collapsible header ",


                    day4: "Monday",
                    date4: "02/06/2020",
                    topic4: "Use Opportunity Wisely",
                    bible_text4 : "Philem. 1:9-10",
                    lesson_word4: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis4: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point4 : "oday you will learn the secret recipe to a collapsible header ",

                    day5: "Monday",
                    date5: "02/06/2020",
                    topic5: "Use Opportunity Wisely",
                    bible_text5 : "Philem. 1:9-10",
                    lesson_word5: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis5: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point5 : "oday you will learn the secret recipe to a collapsible header ",


                    day6: "Monday",
                    date6: "02/06/2020",
                    topic6: "Use Opportunity Wisely",
                    bible_text6 : "Philem. 1:9-10",
                    lesson_word6: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis6: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point6 : "oday you will learn the secret recipe to a collapsible header ",

                    day7: "Monday",
                    date7: "02/06/2020",
                    topic7: "Use Opportunity Wisely",
                    bible_text7 : "Philem. 1:9-10",
                    lesson_word7: "Not to worry because today you will learn the secret recipe to a collapsible header in pure JavaScript. With a mix of spices, some sugar, and a sprinkle of salt 🧂 Full ‘sauce’ code is available at the end of this articleFirst we need to define three constants in our react native component, theoretically these could be dynamic based on user settings for advanced collapsible headers, but in our example these values are constant.",
                    point_of_emphasis7: " Not to worry because today you will learn the secret recipe to a collapsible header",
                    prayer_point7 : "oday you will learn the secret recipe to a collapsible header ",

                },
               
            },
           
          ]
        }
      },
      { id : 1,
        units: {
          title: "Unit one",
          description: "Restoration Through Christ (Lesson 1-4)",
          lessons: [
            { id: 1,
              title: "lesson one",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 2,
              title: "lesson two",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 3,
              title: "lesson three",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 4,
              title: "lesson four",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
           
          ]
        }
      },
      { id : 1,
        units: {
          title: "Unit one",
          description: "Restoration Through Christ (Lesson 1-4)",
          lessons: [
            { id: 1,
              title: "lesson one",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 2,
              title: "lesson two",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 3,
              title: "lesson three",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
            { id: 4,
              title: "lesson four",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",

                    lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
                }
            },
           
          ]
        }
      }, 
    ]
  
 

  
  return (
    <SafeAreaView >
    <ScrollView className=' w-screen h-full flex flex-col'>
      
  <View className=' w-screen h-full  align-middle justify-around items-center mb-20'>

  <TouchableOpacity  className=' w-80 h-20 rounded-md bg-[#751717] flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-2xl text-white text-center font-bold'>4TH QUARTER</Text>
  <Text className=' text-2xl text-white font-bold text-center'>JUNE-AUGUST,2023</Text>
  </TouchableOpacity>
  <View className=' w-80 h-40   flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-xl  text-[#8d99ae] text-center font-serif'>THEME</Text>
  <Text className=' text-2xl text-[#8d99ae] text-center italic font-extrabold'>Demonstration of the </Text>
  <Text className=' text-4xl text-[#8d99ae] text-center font-extrabold'>CHRISTIAN LIFE</Text>
  <Text className=' text-sm text-[#8d99ae]  text-center font-normal'>(EXPOSITION ON THE BOOK OF PHILEMON)</Text>
  </View>

  <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'>

{
  units?.map( 
     (unit, index) => {
      return (
    <TouchableOpacity key={index} onPress={() => navigation.navigate('Units',{unit})} className=' w-96 h-44 flex flex-col  bg-[#255f85]  rounded-md justify-center items-center align-middle shadow-2xl' >
<Text className=' font-extrabold text-2xl italic text-white py-5'>{unit.units.title}</Text>
<Text className=' font-extrabold text-lg text-white'>{unit.units.description}</Text>

</TouchableOpacity> )
})
}


 </View>

  </View>
  </ScrollView>
   </SafeAreaView>
  )
 
}

export default SecondPage;



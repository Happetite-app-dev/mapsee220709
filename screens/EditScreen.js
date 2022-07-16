import {View, Text, StyleSheet, ScrollView, TextInput, Button, Image } from 'react-native';
import React,{useState} from 'react';
import ImgPicker from '../components/ImgPicker';
import DatePicker from '../components/DatePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecordLocationImage = require('../assets/image/RecordLocation.png');
const RecordDateImage = require('../assets/image/RecordDate.png');
const RecordFolderImage = require('../assets/image/RecordFolder.png');
const RecordFolderNameImage = require('../assets/image/RecordFolderName.png');
const RecordTextImage = require('../assets/image/RecordText.png');
const RecordPhotoImage = require('../assets/image/RecordPhoto.png');


const EditScreen = (props) => {
    const [place,setPlace]=useState('');

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [folderName, setFolderName] = useState('폴더명');
    const [showFolderBottomSheet, setShowFolderBottomSheet] = useState(false);

    const [selectedPhoto, setSelectedPhoto]=useState();

    const [text, setText]=useState('');

    return(
        <ScrollView>
            <View style={{height:50,...styles.item}}>
                <Image source={RecordLocationImage}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={plc=>setPlace(plc)}
                    value={place}    
                />
            </View>
            <View style={{width: 350, height: showDatePicker? 266 : 50, ...styles.item}}>
                <Image source={RecordDateImage}/>
                <DatePicker date1={date} setDate1={date1=>setDate(date1)} show={showDatePicker} setShow={show1=>setShowDatePicker(show1)}/>
            </View>
            <View style={{height:50,...styles.item}}>
                <Image source={RecordFolderImage}/> 
                <TouchableOpacity onPress={()=>setShowFolderBottomSheet(!showFolderBottomSheet)} style={{width:76, height:32, borderRadius: 16, left: 10, bottom: 7, alignItems:'center', justifyContent: 'center', flexDirection:'row', backgroundColor: 'grey'}}>
                    <Image source={RecordFolderNameImage}/>
                    <Text> {folderName}</Text>
                </TouchableOpacity>         
            </View>
            <View style={{height:105, bottom: 5,...styles.item}}>
                <Image source={RecordPhotoImage}/>
                <ImgPicker onImageTaken={photo=>setSelectedPhoto(photo)}/>
            </View>
            <View style={styles.item}>
                <Image source={RecordTextImage}/>  
                <TextInput
                    style={styles.record}
                    onChangeText={txt=>setText(txt)}
                    value={text}
                    multiline={true}
                    placeholder='내용을 입력해주세요'
                    placeholderTextColor='grey'
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="작성"
                />
            </View>
            

        </ScrollView>
    )
}

export default EditScreen;


const styles=StyleSheet.create({
    item:{
        marginLeft:7,
        flex:1,
        flexDirection: 'row'
    },
    label:{
        fontSize: 17,
        marginTop:2,
        marginBottom:15,
        marginRight:15,
        paddingVertical:4,
        paddingHorizontal:2
    },
    textInput:{
        //borderBottomColor: '#B0E0E6',
        //borderBottomWidth:1,
        marginBottom: 15,
        paddingVertical:2,
        paddingHorizontal:2,
        width: '85%',
        bottom:6,
        paddingLeft:10,
    },
    record:{
        //borderColor: '#B0E0E6',
        width: '85%',
        height:300,
        //borderWidth:1,
        marginBottom: 15,
        paddingVertical:2,
        paddingHorizontal:2,
        left:10,
        bottom: 6,
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        height: '100%',
    },
});
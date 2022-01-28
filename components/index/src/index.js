import { StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar, TextInput } from 'react-native';
import CardTable from '../../card-table/CardTable.js';
import { useState } from 'react';

const Index = () => {
    const [ query, setQuery ] =  useState();
    const [ search, setSearch ] = useState(false);
    const [ error1, setError1 ] = useState(false);

    const searchQuery = () => {
        if(query)
        {
            setError1(false);
            setSearch(true);
        }
        else
        {
            setError1(true);
        }
    }
  
    return (
        <SafeAreaView style={styles.background}>
            <StatusBar  barStyle="light-content" translucent={true} />
            { (search==false) ?
                <>
                    { error1 &&
                        <Text style={styles.danger}>What am I searching?</Text>
                    }
                    <TextInput
                        style={ styles.input }
                        placeholder="Enter Movie/Show Title..."
                        onChangeText={(event)=>{ setQuery(event) }}
                    />
                    <TouchableOpacity onPress={searchQuery} style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Streaming Service</Text>
                    </TouchableOpacity>
                </>
                :
                <CardTable query={query} />
            }
        </SafeAreaView>
    );
}

export default Index;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#1e78fb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#127986',
        width: '80%',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: 'black',
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchButton: {
        backgroundColor: "#105ECC",
        margin: 5,
        borderRadius: 15,
        paddingVertical: 10,
        alignSelf: 'center',
        width: '60%',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "500",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    danger: {
        color: '#fbcccc',
        alignSelf: 'center',
        textAlign: 'center'
    }
});
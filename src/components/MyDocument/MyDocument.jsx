import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        margin: 10,
        padding: 10,
        flexGrow: 1
    },



});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>
                    The sky was a brilliant shade of blue as the sun began to set in the distance. A light breeze rustled through the trees, carrying the sweet scent of freshly bloomed flowers. The sound of children playing in the park could be heard in the distance, accompanied by the chirping of birds.

                    As I walked along the path, I couldn't help but feel a sense of peace and contentment. The world seemed to slow down, and I was able to appreciate the beauty around me. I stopped for a moment to take it all in, closing my eyes and breathing in the fresh air.
                </Text>
            </View>
            <View style={styles.section}>
                <Text>
                    When I opened my eyes, I noticed a small bird perched on a nearby branch, its feathers ruffled by the wind. It seemed to be watching me, and I couldn't help but feel a connection with the tiny creature. We gazed at each other for a few moments before it spread its wings and flew away, disappearing into the sky.

                    As I continued on my walk, I felt a renewed sense of energy and positivity. The world may be full of chaos and uncertainty, but moments like these remind me that there is still beauty and wonder to be found.
                </Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument
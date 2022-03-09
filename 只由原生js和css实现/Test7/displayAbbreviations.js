function displayAbbreviations() {
    if (document.createElement && document.createTextNode && document.appendChild) {
        let abbrreviations = document.getElementsByTagName("abbr");
        let abbrArr = new Array();
        for (let i = 0, a = abbrreviations.length; i < a; i++) {
            if (abbrreviations[i]) {
                let text = abbrreviations[i].getAttribute('title');
                let key = abbrreviations[i].lastChild.nodeValue;
                abbrArr[key] = text;
            }
        }
        let dictionaryList = document.createElement("dl");
        for (const key in abbrArr) {
            let dictionaryTitle = document.createElement("dt");
            let dictionaryData = document.createElement("dd");
            let dictionaryTitleText = document.createTextNode(key);
            let dictionaryDataText = document.createTextNode(abbrArr[key]);
            dictionaryData.appendChild(dictionaryDataText);
            dictionaryTitle.appendChild(dictionaryTitleText);
            dictionaryTitle.appendChild(dictionaryData);
            dictionaryList.appendChild(dictionaryTitle);
        };
        let header = document.createElement("h2");
        let headerText = document.createTextNode("Abbreviations");
        header.appendChild(headerText);
        document.body.appendChild(header);
        document.body.appendChild(dictionaryList);
    } else return false;
}
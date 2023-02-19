# Coivd India Data
Coivd India Data is a web application that aims to provide the COVID case data for India and its state for the day as well as since the beginning of the pandemic. It uses graphs, tables, maps, and tabs. There are four types of data provided by the application including confirmed, active (currently infect people), recovered, and the death all marked by 4 colors green, blue, red, and grey respectively. 

The page is divided into two sections on the left side the daily state-wise and accumulated India data is displayed. There are four tabs on the top of the left side which shows the total and today's data for India in their respective colors. Clicking on any one of the tabs will change the data to the respective type on the right side which includes graphs and a map of India. Below this is a table that has state-wise data along with the change in the stats as compared to the previous day. A positive or favorable change in the stat is shown in green while a negative or unfavorable change is displayed in red.

The right side of the page has a map of India on top where one can see the stats of any particular state by hovering over them. The stat type can be selected by clicking on the tabs above the table on the right side. The color intensity of the state also provides the idea of how big is the stats for the state as the color selected to show a state varies on the number and the higher the number the strong would be the color. One can also toggle a switch on top of the map to see the daily and total data for the states. Below this map are four graphs that show data for a brief amount of time ranging from the last 7 days to the start of the pandemic, there are five buttons to change the length of the duration. And similar to the map one can switch between daily and cumulative data by toggling the switch that is provided at the top of the graph. 

# Technologies and APIs used
To build this project I have used React library to build the web page and SCSS to style the page. 

For fetching the daily stats for India I have used the free APIs provided by the [Government of India](https://www.mohfw.gov.in/). This APi provides the daily confirmed, active, recovered and death numbers for India and as well as for all states. 

For all the data since the start of the pandemic I am looking for a new source as our old source has been discontinued.

# How to access
To access the page visit,
[India-Covid-Data](https://utkarsh-sanjivan.github.io/India-Covid-Data/)

# Snapshot
![India Covid Data](https://github.com/utkarsh-sanjivan/India-Covid-Data/tree/master/public/India-Covid-Data_.png?raw=true)

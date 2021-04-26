# Group Assignment #2


### We have decided to narrow down our data down to these datasets:

1. Plastic Data Set: Estimate of Plastic Pollution in the World's Ocean [link](https://arc-gis-hub-home-arcgishub.hub.arcgis.com/datasets/schools-BE::estimate-of-plastic-pollution-in-the-world-s-oceans-1-01-4-75?geometry=-118.091%2C-54.081%2C-157.467%2C50.378) 
    1. Years: 2007-2013
2. Fishing Data Set: Global Datasets of AIS-based Fishing Effort and Vessel Presence [link](https://globalfishingwatch.org/data-download/datasets/public-fishing-effort) 
    1. Years: 2012-2020
    2. Note: The fishing data set comes from Global Fishing Watch, and you have to make an account to access the data. 
    3. Description: This dataset contains the Global Fishing Watch AIS-based fishing effort and vessel presence datasets. Data is based on fishing detections of >114,000 unique AIS devices on fishing vessels, of which ~70,000 are active each year. Fishing vessels are identified via a neural network classifier, vessel registry databases, and manual review by GFW and regional experts. Data are binned into grid cells 0.01 (or 0.1) degrees on a side and measured in units of hours. The time is calculated by assigning an amount of time to each AIS detection (which is the time to the previous position), and then summing all positions in each grid cell. 
3. Ocean Protected Zone Data Set [link](https://www.protectedplanet.net/en/search-areas?filters%5Bdb_type%5D%5B%5D=wdpa&filters%5Bis_type%5D%5B%5D=marine)
4. Mismanaged Plastic Waste [link](https://ourworldindata.org/plastic-pollution) </br>
We will use this supplemental dataset to illustrate which countries are not managing their plastic waste properly, which allows plastic waste to enter the ocean via inland waterways, wastewater outflows, or by wind/tides. We will also use this data to construct bar charts to show which countries are the greatest contributors.
 

### This is how we plan to manipulate and work with the data:

We will download our data into csv files, from here we will take the data into Python and manipulate it to get it into its proper form (e.g., perhaps merging tables or adding more information should we deem necessary). Then we will read into our website as a csv, and plot it on a map using leaflet ,javascript, html, and css. We will also create visualizations in Tableau and get the link from Tableau Public to embed in the html code. So we can have many interactive vizzes on our site, so people are more inclined to understand our proejct and stay on our sight. The user will be able to filter types of informaiton on the map (e.g., fishing vessels, plastic pollution, and ocean protected areas). Boast belonging to different countries will be plotted with different color circles. We will also show density of plastic pollution in the oceans using a continuous red color scale. We will also be able to rreveal wherrer any illegal fishing takes places in Marina Protected Areas. 

Daily Fishing Effort at 10th Degree Resolution by MMSI, version 2.0, 2012-2020

Fishing effort and vessel presence data is available in the following formats:
 - BigQuery Tables (global-fishing-watch.gfw_public_data.fishing_effort_byvessel_v2)
 - CSVs

Description:
Fishing effort and vessel presence is binned into grid cells 0.1 degrees on a side, and measured in units of hours. The time is calculated by assigning an amount of time to each AIS detection (which is the time to the previous AIS position), and then summing all positions in each grid cell. Data is based on fishing detections of >114,000 unique AIS devices on fishing vessels, of which ~70,000 are active each year. Fishing vessels are identified via a neural network classifier and vessel registry databases. Fishing effort for squid jiggers is not calculated through the neural network, but instead through this heuristic (https://github.com/GlobalFishingWatch/global-footprint-of-fisheries/blob/master/data_production/updated-algorithm-for-squid-jiggers.md).

Vessel information for each MMSI, including flag state, geartype, and vessel dimensions is provided in a separate file (fishing-vessels-v2.csv).

Table Schema:
 - date: Date in YYYY-MM-DD format
 - cell_ll_lat: the latitude of the lower left corner of the grid cell, in decimal degrees
 - cell_ll_lon: the longitude of the lower left corner of the grid cell, in decimal degrees
 - mmsi: Maritime Mobile Service Identity, the identifier for AIS
 - hours: hours that the vessel was present in this gridcell on this day
 - fishing_hours: hours that the vessel was fishing in this grid cell on this day

For additional information about the initial release of this dataset, see the associated journal article: D.A. Kroodsma, J. Mayorga, T. Hochberg, N.A. Miller, K. Boerder, F. Ferretti, A. Wilson, B. Bergman, T.D. White, B.A. Block, P. Woods, B. Sullivan, C. Costello, and B. Worm. "Tracking the global footprint of fisheries." Science 361.6378 (2018). (http://science.sciencemag.org/content/359/6378/904)

Unless otherwise stated, Global Fishing Watch data is licensed under a Creative Commons Attribution-ShareAlike 4.0 International license(https://creativecommons.org/licenses/by-sa/4.0/) and code under an Apache 2.0 license (http://www.apache.org/licenses/LICENSE-2.0).

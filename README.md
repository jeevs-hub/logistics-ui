# React Application - Logistics

This React application displays menu items and driver data. The drivers page contains full functionality, while other pages are mostly barebones with basic structure. Below is a summary of the setup and flow of data in the application.

## Prerequisites

- **Node version**: v22.12.0
- **NPM version**: 10.9.2

The application was initially created using `npx create-react-app`, which provided the boilerplate structure. Apologies for the lingering files and assets that were not removed due to time constraints.

## Environment Variables

In the `.env` file, you will find the following variables:

- **`REACT_APP_LOGISTICS_API_URL`**: The URL where the backend C# application is running (the API that provides data for the application).

- **`REACT_APP_LOAD_DATA_FROM_API`**: A boolean flag. If this is set to **true**, the menu and driver data is fetched from the C# API. If it is **false**, the data is loaded from local JSON files in the `assets` directory.

## Data Fetching Flow

The flow of retrieving the menu and driver data is a bit more complicated because the data can be loaded from two different sources: the API or the local JSON files.

1. **DataService Factory**: The `DriverService` and `MenuService` first call a `DataServiceFactory`, which determines which service should be used to fetch the data. Depending on the value of `REACT_APP_LOAD_DATA_FROM_API`, the factory will either use:
   - **`ApiDataService`** to fetch data from the backend.
   - **`JsonDataService`** to load data from the assets directory.

2. **Processing and Formatting**:
   - When data is fetched from the **`JsonDataService`**, the `DriverService` performs some additional processing and formatting of the data before it is returned to the `DriverComponent`. The backend API handles this processing when using the `ApiDataService`.

3. **TimeZone Issue**:
   - An issue was encountered with timezones. When loading the data from the JSON file, the dates were created incorrectly due to timezone conversion. Specifically, if the date was not processed as UTC, the date would be displayed as the previous day (e.g., February 1st was shown as January 31st). This has been addressed in the service, but it remains a bit complex.

## Component and Service Structure

### Driver Component

- The `DriverComponent` did require some refactoring but was left incomplete due to time constraints.
- **Table Component**: Ideally, the table component should have been extracted into its own reusable component.
- **Grouped Activities**: The way activities were grouped by day was quite complex, and this could have been further refactored to make the code cleaner and more maintainable.

### Services

- **`ApiDataService`**: Responsible for fetching data from the backend API.
- **`JsonDataService`**: Loads data from local JSON files stored in the `assets` directory.
- **`DriverService`**: Contains the logic for formatting the driver data when loaded from the JSON file.
- **`MenuService`**: Handles fetching menu data.

### Service Logic

- The **`DriverService`** formats the driver data if loaded from the JSON file, but the backend API automatically formats the data when using `ApiDataService`.
- The date issue (timezone handling) is managed within the `DriverService` when using JSON data.

## Future Improvements

1. **Refactor `DriverComponent`**:
   - The table logic should be refactored into a standalone component to reduce redundancy and improve maintainability.
   
2. **Simplify Grouping Logic**:
   - The logic for grouping activities by day can be simplified to improve readability and performance.

3. **Remove Unnecessary Files**:
   - There are still some files and assets from the `create-react-app` boilerplate that were not removed due to time constraints. These should be cleaned up in a future iteration.


## Running the Application

To run the application, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run:
   ```bash
   npm start
   ```

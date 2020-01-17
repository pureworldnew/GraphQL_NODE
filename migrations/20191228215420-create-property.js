'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // RecID: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      CensusFIPSPlaceCode: {
        type: Sequelize.INTEGER
      },
      propertyaddress_address: {
        type: Sequelize.STRING
      },
      propertyaddress_Cart: {
        type: Sequelize.STRING
      },
      propertyaddress_city: {
        type: Sequelize.STRING
      },
      propertyaddress_DBP: {
        type: Sequelize.INTEGER
      },
      propertyaddress_DPBC: {
        type: Sequelize.INTEGER
      },
      propertyaddress_FIPS: {
        type: Sequelize.INTEGER
      },
      propertyaddress_lng_lat: {
        type: Sequelize.GEOMETRY
      },
      propertyaddress_PLUS4: {
        type: Sequelize.STRING
      },
      propertyaddress_state: {
        type: Sequelize.STRING
      },
      propertyaddress_Zip: {
        type: Sequelize.STRING
      },
      // propertyaddress_Mak: {
      //   type: Sequelize.BIGINT
      // },
      ShapeId: {
        type: Sequelize.INTEGER,
        // // type: Sequelize.BIGINT,
        // // onUpdate: 'CASCADE',
        // // onDelete: 'SET NULL',
        // // onDelete: 'CASCADE',
        // allowNull: false,
        // references: {
        //   model: 'Shape', // name of Target model
        //   // key: 'MAK', // key in Target model that we're referencing
        //   key: 'id', // key in Target model that we're referencing
        // }
      },
      propertyaddress_Addresskey: {
        type: Sequelize.BIGINT
      },
      AreaBuilding: {
        type: Sequelize.INTEGER
      },
      lot_acreage: {
        type: Sequelize.DECIMAL
      },
      AreaLotSF: {
        type: Sequelize.INTEGER
      },
      currentsale_saleprice: {
        type: Sequelize.INTEGER
      },
      currentsale_saledate: {
        type: Sequelize.DATE
      },
      building_totalbaths: {
        type: Sequelize.SMALLINT
      },
      building_bedrooms: {
        type: Sequelize.SMALLINT
      },
      PropertyUseStandardized: {
        type: Sequelize.SMALLINT
      },
      building_yearbuilt: {
        type: Sequelize.SMALLINT
      },
      values_calculatedtotalvalue: {
        type: Sequelize.INTEGER
      },
      currentdeed_mortgageamount: {
        type: Sequelize.INTEGER
      },
      currentdeed_lendername: {
        type: Sequelize.STRING
      },
      currentdeed_mortgagedate: {
        type: Sequelize.DATE
      },
      currentdeed_mortgageterm: {
        type: Sequelize.SMALLINT
      },
      currentdeed_mortgageduedate: {
        type: Sequelize.DATE
      },
      currentdeed_secondmortgageamount: {
        type: Sequelize.INTEGER
      },
      owneraddress_address: {
        type: Sequelize.STRING
      },
      owneraddress_Cart: {
        type: Sequelize.STRING
      },
      owneraddress_city: {
        type: Sequelize.STRING
      },
      owneraddress_Dpb: {
        type: Sequelize.INTEGER
      },
      owneraddress_Dpbc: {
        type: Sequelize.INTEGER
      },
      owneraddress_Fips: {
        type: Sequelize.INTEGER
      },
      owneraddress_Plus4: {
        type: Sequelize.INTEGER
      },
      owneraddress_State: {
        type: Sequelize.STRING
      },
      owneraddress_Zip: {
        type: Sequelize.STRING
      },
      owneraddress_contactMak: {
        type: Sequelize.BIGINT
      },
      owneraddress_AddressKey: {
        type: Sequelize.INTEGER
      },
      mdPropertyResults: {
        type: Sequelize.STRING
      },
      mdResults: {
        type: Sequelize.STRING
      },
      UnitsCount: {
        type: Sequelize.SMALLINT
      },
      calculatedimprovementvalue: {
        type: Sequelize.INTEGER
      },
      calculatedlandvalue: {
        type: Sequelize.INTEGER
      },
      TaxMarketImprovementsPerc: {
        type: Sequelize.SMALLINT
      },
      ContactBaseMAK: {
        type: Sequelize.BIGINT
      },
      PropertyBaseMAK: {
        type: Sequelize.BIGINT
      },
      owner_name: {
        type: Sequelize.STRING
      },
      owner_firstname: {
        type: Sequelize.STRING
      },
      owner_middlename: {
        type: Sequelize.STRING
      },
      owner_lastname: {
        type: Sequelize.STRING
      },
      owner_NameSuffix: {
        type: Sequelize.STRING
      },
      OwnerTypeDescription1: {
        type: Sequelize.STRING
      },
      ParcelID: {
        type: Sequelize.INTEGER
      },
      UnifiedSchoolDistrictNameCode: {
        type: Sequelize.INTEGER
      },
      UnifiedSchoolDistrictName: {
        type: Sequelize.STRING
      },
      Active: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Suite: {
        type: Sequelize.STRING
      },
      Urbanization: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      MAUSAddressKey: {
        type: Sequelize.BIGINT
      },
      ParsedRange: {
        type: Sequelize.INTEGER
      },
      ParsedPreDir: {
        type: Sequelize.STRING
      },
      ParsedName: {
        type: Sequelize.STRING
      },
      ParsedSuffix: {
        type: Sequelize.STRING
      },
      ParsedPostDir: {
        type: Sequelize.STRING
      },
      ParsedSuiteName: {
        type: Sequelize.STRING
      },
      ParsedSuiteRange: {
        type: Sequelize.STRING
      },
      BaseMAK: {
        type: Sequelize.BIGINT
      },
      AddressType: {
        type: Sequelize.STRING
      },
      RBDI: {
        type: Sequelize.STRING
      },
      lng_lat: {
        type: Sequelize.GEOMETRY
      },
      Censuskey: {
        type: Sequelize.STRING
      },
      geolevel: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};
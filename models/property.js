'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    CensusFIPSPlaceCode: DataTypes.INTEGER,
    propertyaddress_address: DataTypes.STRING,
    propertyaddress_Cart: DataTypes.STRING,
    propertyaddress_city: DataTypes.STRING,
    propertyaddress_DBP: DataTypes.INTEGER,
    propertyaddress_DPBC: DataTypes.INTEGER,
    propertyaddress_FIPS: DataTypes.INTEGER,
    propertyaddress_lng_lat: DataTypes.GEOMETRY,
    propertyaddress_PLUS4: DataTypes.STRING,
    propertyaddress_state: DataTypes.STRING,
    propertyaddress_Zip: DataTypes.STRING,
    ShapeId: DataTypes.BIGINT,
    propertyaddress_Addresskey: DataTypes.BIGINT,
    AreaBuilding: DataTypes.INTEGER,
    lot_acreage: DataTypes.DECIMAL,
    AreaLotSF: DataTypes.INTEGER,
    currentsale_saleprice: DataTypes.INTEGER,
    currentsale_saledate: DataTypes.DATE,
    building_totalbaths: DataTypes.SMALLINT,
    building_bedrooms: DataTypes.SMALLINT,
    PropertyUseStandardized: DataTypes.SMALLINT,
    building_yearbuilt: DataTypes.SMALLINT,
    values_calculatedtotalvalue: DataTypes.INTEGER,
    currentdeed_mortgageamount: DataTypes.INTEGER,
    currentdeed_lendername: DataTypes.STRING,
    currentdeed_mortgagedate: DataTypes.DATE,
    currentdeed_mortgageterm: DataTypes.SMALLINT,
    currentdeed_mortgageduedate: DataTypes.DATE,
    currentdeed_secondmortgageamount: DataTypes.INTEGER,
    owneraddress_address: DataTypes.STRING,
    owneraddress_Cart: DataTypes.STRING,
    owneraddress_city: DataTypes.STRING,
    owneraddress_Dpb: DataTypes.INTEGER,
    owneraddress_Dpbc: DataTypes.INTEGER,
    owneraddress_Fips: DataTypes.INTEGER,
    owneraddress_Plus4: DataTypes.INTEGER,
    owneraddress_State: DataTypes.STRING,
    owneraddress_Zip: DataTypes.STRING,
    owneraddress_contactMak: DataTypes.BIGINT,
    owneraddress_AddressKey: DataTypes.INTEGER,
    mdPropertyResults: DataTypes.STRING,
    mdResults: DataTypes.STRING,
    UnitsCount: DataTypes.SMALLINT,
    calculatedimprovementvalue: DataTypes.INTEGER,
    calculatedlandvalue: DataTypes.INTEGER,
    TaxMarketImprovementsPerc: DataTypes.SMALLINT,
    ContactBaseMAK: DataTypes.BIGINT,
    PropertyBaseMAK: DataTypes.BIGINT,
    owner_name: DataTypes.STRING,
    owner_firstname: DataTypes.STRING,
    owner_middlename: DataTypes.STRING,
    owner_lastname: DataTypes.STRING,
    owner_NameSuffix: DataTypes.STRING,
    OwnerTypeDescription1: DataTypes.STRING,
    ParcelID: DataTypes.INTEGER,
    UnifiedSchoolDistrictNameCode: DataTypes.INTEGER,
    UnifiedSchoolDistrictName: DataTypes.STRING,
    Active: DataTypes.STRING,
    Address: DataTypes.STRING,
    Suite: DataTypes.STRING,
    Urbanization: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    MAUSAddressKey: DataTypes.BIGINT,
    ParsedRange: DataTypes.INTEGER,
    ParsedPreDir: DataTypes.STRING,
    ParsedName: DataTypes.STRING,
    ParsedSuffix: DataTypes.STRING,
    ParsedPostDir: DataTypes.STRING,
    ParsedSuiteName: DataTypes.STRING,
    ParsedSuiteRange: DataTypes.STRING,
    BaseMAK: DataTypes.BIGINT,
    AddressType: DataTypes.STRING,
    RBDI: DataTypes.STRING,
    lng_lat: DataTypes.GEOMETRY,
    Censuskey: DataTypes.STRING,
    geolevel: DataTypes.STRING
  }, {});

  Property.associate = function (models) {
    // associations can be defined here
    Property.belongsTo(models.Shape, {
      // onDelete: 'CASCADE',
      foreignKey: 'ShapeId'
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };
  return Property;
};
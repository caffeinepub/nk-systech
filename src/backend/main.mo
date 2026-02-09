import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  module Inquiry {
    public type ServiceInterest = {
      #energyTransition;
      #renewableEnergyConsulting;
      #solarDevelopment;
      #energyStorage;
      #energyPurchasingAnalysis;
      #sustainabilityStrategy;
      #other;
    };

    public type Inquiry = {
      id : Nat;
      name : Text;
      phoneNumber : Text;
      email : Text;
      serviceInterest : ServiceInterest;
      message : Text;
      timestamp : Int;
    };

    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  type Inquiry = Inquiry.Inquiry;
  type ServiceInterest = Inquiry.ServiceInterest;

  let inquiriesMap = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phoneNumber : Text, email : Text, serviceInterest : ServiceInterest, message : Text) : async Nat {
    let inquiryId = nextInquiryId;
    let newInquiry : Inquiry = {
      id = inquiryId;
      name;
      phoneNumber;
      email;
      serviceInterest;
      message;
      timestamp = 0; // Replace with actual timestamp if available
    };
    inquiriesMap.add(inquiryId, newInquiry);
    nextInquiryId += 1;
    inquiryId;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiriesMap.values().toArray().sort();
  };

  public query ({ caller }) func getInquiryById(inquiryId : Nat) : async Inquiry {
    switch (inquiriesMap.get(inquiryId)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getInquiriesByServiceInterest(serviceInterest : ServiceInterest) : async [Inquiry] {
    let filteredIter = inquiriesMap.values().filter(func(inquiry) { inquiry.serviceInterest == serviceInterest });
    filteredIter.toArray();
  };
};

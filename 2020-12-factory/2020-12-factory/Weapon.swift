//
//  Weapon.swift
//  factory
//
//  Created by adeline pc on 30/12/2020.
//  Copyright © 2020 adeline pc. All rights reserved.
//



import Foundation


enum WeaponType {
    case sword
    case laserRay
    case inChest
    case no
}


class Weapon {
    
    //  XXXXXXXXXXXXXXXXXXXX  PROPERTIES  XXXXXXXXXXXXXXXXXXXX
    var damage = 0
    
    var type: WeaponType
    
    //  XXXXXXXXXXXXXXXXXXXX INIT  XXXXXXXXXXXXXXXXXXXX
    
    init(weaponType: WeaponType) {
        self.type = weaponType
        
        switch weaponType {
        case .sword:
            self.damage = 30
        case .laserRay:
            self.damage = 50
        case .inChest:
            self.damage = Int.random(in: 20...250)
        case .no:
            self.damage = 0
        }
    }
}

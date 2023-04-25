import buildingIco from './../public/icons/building_ico.png'
import designIco from './../public/icons/desing_ico.png'
import realEstateIco from './../public/icons/real_estate_ico.png'
import teamIco from './../public/icons/team_ico.png'
import waterIco from './../public/icons/water_ico.png'

import buildingBL from './../public/icons/building-sf.png'
import desingBL from './../public/icons/desing-sf.png'
import realEstateBL from './../public/icons/real_estate-sf.png'
import teamBL from './../public/icons/team-sf.png'
import waterBL from './../public/icons/water-sf.png'

const Menu = [{
    path: "/building",
    icon: "",
    img_ico: buildingIco,
    img_mask: buildingBL,
    title: "Construcción"
}, {
    path: "/design",
    icon: "",
    img_ico: designIco,
    img_mask: desingBL,
    title: "Diseño"
}, {
    path: "/water",
    icon: "",
    img_ico: waterIco,
    img_mask: waterBL,
    title: "Agua"
}, {
    path: "/real_estate",
    icon: "",
    img_ico: realEstateIco,
    img_mask: realEstateBL,
    title: "Inmobiliaria"
}, {
    path: "/team",
    icon: "fa-regular fa-circle",
    img_ico: teamIco,
    img_mask: teamBL,
    title: "Equipo"
}]

export default Menu
/** @odoo-module **/
import { registry } from "@web/core/registry"
import { listView } from "@web/views/list/list_view"
import { ListController } from "@web/views/list/list_controller"
import { useService } from "@web/core/utils/hooks"

class ResPartnerListController extends ListController {
    setup(){
        super.setup()
        console.log("this is res partner controller")
        this.action = useService("action")
    }
    viewSaleOrders () {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Sale Orders",
            res_model: "sale.order",
            views: [[false, "list"], [false, "form"]]
        })
    }
}

export const ResPartnerListView =  {
    ...listView,
    Controller: ResPartnerListController,
    buttonTemplate: "view_inheritance_odoo.ResParnerListView.Buttons"
}

registry.category("views").add("res_partner_list_view", ResPartnerListView)

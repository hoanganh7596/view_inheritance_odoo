/** @odoo-module **/
import { registry } from "@web/core/registry"
import { kanbanView } from "@web/views/kanban/kanban_view"
import { KanbanController } from "@web/views/kanban/kanban_controller"
import { useService } from "@web/core/utils/hooks"
import { onWillStart } from "@odoo/owl";

class ResPartnerKanbanController extends KanbanController {
    setup(){
        super.setup()
        console.log("this is res partner controller kanban")
        this.action = useService("action")
        this.orm = useService("orm")
        onWillStart (async() => {
            this.partnerLocations = await this.orm.readGroup("res.partner",[],["state_id"],["state_id"])
            console.log(this.partnerLocations)
        })
    }
    viewSaleOrders () {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Sale Orders",
            res_model: "sale.order",
            views: [[false, "list"], [false, "form"]]
        })
    }

    selectLocation(state){
        const state_id = state.state_id[0]
        const name = state.state_id[1]
        // this.env.searchModel.setDomainParts({
        //     state: {
        //         domain: [['state_id', '=', state_id]],
        //         facetLabel:
        //     }
        // })
    }
}

ResPartnerKanbanController.template = "view_inheritance_odoo.ResParnerKanbanView"

export const ResPartnerKanbanView =  {
    ...kanbanView,
    Controller: ResPartnerKanbanController,
    buttonTemplate: "view_inheritance_odoo.ResParnerKanbanView.Buttons",
}

registry.category("views").add("res_partner_kanban_view", ResPartnerKanbanView)

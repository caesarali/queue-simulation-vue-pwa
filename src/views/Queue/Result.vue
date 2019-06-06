<template>
    <div>
        <v-data-table :headers="headers" :items="queues" class="elevation-1" hide-actions>
            <template v-slot:items="props">
                <td class="text-xs-center">{{ props.item.no }}.</td>
                <td class="text-xs-center">{{ props.item.z }}</td>
                <td class="text-xs-center">{{ props.item.r }}</td>
                <td class="text-xs-center">{{ props.item.iat }}</td>
                <td class="text-xs-center">{{ props.item.at }}</td>
                <td class="text-xs-center">{{ props.item.st }}</td>
                <td class="text-xs-center">{{ props.item.it }}</td>
                <td class="text-xs-center">{{ props.item.ft }}</td>
                <td class="text-xs-center">{{ props.item.qt }}</td>
                <td class="text-xs-center">{{ props.item.spit }}</td>
                <td class="text-xs-center">{{ props.item.spt }}</td>
            </template>
            <template v-slot:footer v-if="queues.length">
                <td colspan="8" class="text-xs-center font-weight-bold">Total</td>
                <td class="text-xs-center font-weight-bold">{{ queuesSum.qt }}</td>
                <td class="text-xs-center font-weight-bold">{{ queuesSum.spit }}</td>
                <td class="text-xs-center font-weight-bold">{{ queuesSum.spt }}</td>
            </template>
        </v-data-table>
        <br>
        <v-subheader class="pa-0">Average :</v-subheader>
        <p v-for="(item, index) in queuesAverage" :key="index">
            {{ item.text }} <u>{{ item.value }}</u>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        variable: [Object, Array]
    },
    data () {
        return {
            headers: [
                { text: '#', align: 'center', sortable: false, value: 'no', width: '1%' },
                { text: 'Z', align: 'center', sortable: false, value: 'z' },
                { text: 'R', align: 'center', sortable: false, value: 'r' },
                { text: 'IAT', align: 'center', sortable: false, value: 'iat' },
                { text: 'AT', align: 'center', sortable: false, value: 'at' },
                { text: 'ST', align: 'center', sortable: false, value: 'st' },
                { text: 'IT', align: 'center', sortable: false, value: 'it' },
                { text: 'FT', align: 'center', sortable: false, value: 'ft' },
                { text: 'QT', align: 'center', sortable: false, value: 'qt' },
                { text: 'SPIT', align: 'center', sortable: false, value: 'spit' },
                { text: 'SPT', align: 'center', sortable: false, value: 'spt' },
            ]
        }
    },
    computed: {
        queues() {
            const queues = []

            // RNG Variable
            let a = parseInt(this.variable.a)
            let c = parseInt(this.variable.c)
            let m = parseInt(this.variable.m)
            let l = parseInt(this.variable.queue_length)
            let z = parseInt(this.variable.z)
            let r = 0

            // Queue Variable
            let iat = 0
            let at = 0
            let st = 0
            let it = 0
            let ft = 0
            let qt = 0
            let spit = 0
            let spt = 0

            if (!!a && !!c && !!m && !!l && !!z) {
                for (let index = 0; index < l; index++) {
                    z = ((a * z) + c) % m
                    r = parseFloat((z / m).toFixed(2))
                    iat = Math.round(-60 * Math.log(r))
                    at = at + iat
                    st = Math.round(-40 * Math.log(r))
                    it = ft > at ? ft : at
                    spit = it - ft
                    ft = it + st
                    qt = it - at
                    spt = qt + st

                    queues[index] = { no: index+1, z: z, r: r, iat: iat, at: at, st: st, it: it, ft: ft, qt: qt, spit: spit, spt: spt }
                }
            }

            return queues
        },

        queuesSum() {
            return {
                qt: this.queues.map(item => item.qt).reduce((a,b) => a + b, 0),
                spit: this.queues.map(item => item.spit).reduce((a,b) => a + b, 0),
                spt: this.queues.map(item => item.spt).reduce((a,b) => a + b, 0)
            }
        },

        queuesAverage() {
            let length = this.variable.queue_length
            let last_ft = this.queues.map(item => item.ft)[length-1]

            let avg_qt = this.queuesSum.qt / length
            let avg_spt = this.queuesSum.spt / length
            let avg_ql = this.queuesSum.qt / last_ft
            let avg_qi = this.queuesSum.spt / last_ft
            let avg_spit = this.queuesSum.spit / last_ft

            return [
                { text: 'Rata-rata waktu antrian = ', value: length ? avg_qt : 0 },
                { text: 'Rata-rata waktu didalam sistem = ', value: length ? avg_spt : 0 },
                { text: 'Rata-rata panjang antrian = ', value: length ? avg_ql.toFixed(2) : 0 },
                { text: 'Rata-rata jumlah item didalam antrian = ', value: length ? avg_qi.toFixed(2) : 0 },
                { text: 'SP Idle Time = ', value: length ? avg_spit.toFixed(2) : 0 },
            ]
        }
    }
}
</script>

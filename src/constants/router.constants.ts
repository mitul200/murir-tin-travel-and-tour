import { bookingRouter } from "../routes/booking.route"
import { reviewRouter } from "../routes/review.route"
import { tourRouter } from "../routes/tour.route"
import { userRouter } from "../routes/user.route"

const randomRoutesArray = [
    {
        path:'/users',
        routs:userRouter
    },
    {
        path:'/tours',
        routs:tourRouter
    },
    {
        path:'/reviews',
        routs:reviewRouter
    },
    {
        path:'/bookings',
        routs:bookingRouter
    }
]

export default randomRoutesArray